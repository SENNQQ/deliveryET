import React, {FC} from 'react';
import ter from "../../img/500_500_1649768756Монтажнаяобласть5.jpg";
import CountProduct from "../CountProduct";
import st from './orderItem.module.scss';
import cn from "classnames";
import {shopCartItem} from "../../store/shopCart/types";
import {changeCountItem, deleteItem} from "../../store/shopCart/slice";
import {useAppDispatch} from "../../store/hook";


const OrderItem: FC<{ orderItem: shopCartItem[] }> = ({orderItem}) => {

    const dispatch = useAppDispatch();

    const deleteItemFromCart = (idItem:string):void =>{
        dispatch(deleteItem(idItem));
    }

    const changeCountItemCart = (idItem:shopCartItem, newCount:number):void =>{
        dispatch(changeCountItem([idItem, newCount]));
    }

    return (
        <>
            {orderItem.map((item) => (
                <div key={item._id}>
                    <div className={st.content_order__row}>
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
                        <div
                            className={cn(st.content_order__row__minus_plus_number, st.content_order__row_flex_center)}>
                            <CountProduct countItem={item.count}
                                          changeCountItem={(newCount)=>changeCountItemCart(item, newCount)}/>
                        </div>
                        <div className={cn(st.content_order__row__delete, st.content_order__row_flex_center)}>
                            <span className="delete" onClick={()=>deleteItemFromCart(item._id)}></span>
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    );
};

export default OrderItem;