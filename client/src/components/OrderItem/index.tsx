import React, {FC} from 'react';
import ter from "../../img/500_500_1649768756Монтажнаяобласть5.jpg";
import CountProduct from "../CountProduct";
import st from './orderItem.module.scss';
import cn from "classnames";
import {shopCartItem} from "../../store/shopCart/types";
import {changeCountItem, deleteItem} from "../../store/shopCart/slice";
import {useAppDispatch} from "../../store/hook";
import {receivingForm} from "../../pages/ShopCart";

type orderItemType = {
    orderItem: shopCartItem[],
    idOrder?: string,
    HandlerGetData?: (item: receivingForm) => void,
    HandlerItem?: receivingForm
}

/**
 * Компонент для отрисовки одного товара заказа */
const OrderItem: FC<orderItemType> = ({
                                          orderItem,
                                          idOrder,
                                          HandlerGetData,
                                          HandlerItem}) => {

    const dispatch = useAppDispatch();

    const deleteItemFromCart = (idItem: string): void => {
        dispatch(deleteItem(idItem));
    };

    const changeCountItemCart = (idItem: shopCartItem, newCount: number): void => {
        dispatch(changeCountItem([idItem, newCount]));
    }

    return (
        <>
            {idOrder && <div className={cn(st.content_order__row__subtitle, "orderSearchTitle")}>
                Идентификатор заказа: {idOrder}</div>}
            {orderItem.map((item, index) => (
                <div key={item._id}>
                    <div className={cn(st.content_order__row, {"orderSearchGrid": idOrder})}>
                        <div className={st.content_order__row__image}>
                            <img src={ter} alt="ter"/>
                        </div>
                        <div className={st.content_order__row__title__grid}>
                            <div className={st.content_order__row__title}>
                                {item.title}
                            </div>
                            <div className={st.content_order__row__subtitle}>{item.subtitle}</div>
                        </div>
                        <div className={cn(st.content_order__row__price, st.content_order__row_flex_center)}>
                            {item.price * item.count} ₴
                        </div>
                        <div className={cn(st.content_order__row__minus_plus_number, st.content_order__row_flex_center)}>
                            {idOrder ?
                                <div className={cn(st.content_order__row__subtitle, "orderSearchTitle")}>
                                    Количество: {item.count}
                                </div>
                                :
                                <CountProduct countItem={item.count}
                                              changeCountItem={(newCount) => changeCountItemCart(item, newCount)}/>
                            }

                        </div>
                        {idOrder && HandlerGetData && HandlerItem && index == 0 &&
                            <div className="product__item_btn_wrapper product__item_zeroingStyle">
                                <button className="product__item_btn search__size"
                                        onClick={() => HandlerGetData(HandlerItem)}>
                                    <span>Данные</span>
                                </button>
                            </div>
                        }
                        {!idOrder &&
                            <div className={cn(st.content_order__row__delete, st.content_order__row_flex_center)}>
                                <span className="delete" onClick={() => deleteItemFromCart(item._id)}></span>
                            </div>
                        }
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    );
};

export default OrderItem;