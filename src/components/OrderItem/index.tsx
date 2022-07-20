import React, {FC} from 'react';
import ter from "../../img/500_500_1649768756Монтажнаяобласть5.jpg";
import CountProduct from "../CountProduct";
import st from './orderItem.module.scss';
import cn from "classnames";
import {shopCartItem} from "../../store/shopCart/types";
import {deleteItem} from "../../store/shopCart/slice";
import {useAppDispatch} from "../../store/hook";


const OrderItem: FC<{ orderItem: shopCartItem[] }> = ({orderItem}) => {

    const dispatch = useAppDispatch();

    const deleteItemFromCart = (idItem:number):void =>{
        dispatch(deleteItem(idItem));
        orderItem.map(item=>item.id!==idItem);
    }


    return (
        <>
            {orderItem.map((item) => (
                <div key={item.id}>
                    <div className={st.content_order__row}>
                        <div className={st.content_order__row__image}>
                            <img src={ter} alt="ter"/>
                        </div>
                        <div className={st.content_order__row__title__grid}>
                            <div className={st.content_order__row__title}>
                                {item.title}
                            </div>
                            <div className={st.content_order__row__subtitle}>{item.subTitle}</div>
                        </div>
                        <div className={cn(st.content_order__row__price, st.content_order__row_flex_center)}>
                            {item.price} ₴
                        </div>
                        <div
                            className={cn(st.content_order__row__minus_plus_number, st.content_order__row_flex_center)}>
                            <CountProduct/>
                        </div>
                        <div className={cn(st.content_order__row__delete, st.content_order__row_flex_center)}>
                            <span className="delete" onClick={()=>deleteItemFromCart(item.id)}></span>
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    );
};

export default OrderItem;