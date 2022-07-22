import React, {FC} from 'react';
import {shopCartItem} from "../../store/shopCart/types";
import st from "./check.module.scss";
import cn from "classnames";

/**
 * Компонент создания чека для заказа*/
const Check:FC<{ cartItem:  shopCartItem[] }> = ({cartItem}) => {
    return (
        <div className={st.cart_check}>
            <div className={st.cart_check__title}>Ваш чек:</div>
            <ul className={st.cart_check_list}>
                <li>
                    <div className={st.cart_check__left}>Всего на сумму</div>
                    <div className={st.cart_check__right}>
                                                <span>
                                                    {cartItem.reduce((total, item) => {
                                                        return total + item.count * item.price
                                                    }, 0)}
                                                </span> ₴
                    </div>
                </li>
                <li>
                    <div className={cn(st.cart_check__left, "orange")}>К оплате:</div>
                    <div className={cn(st.cart_check__right, "orange")}>
                                                <span>
                                                    {cartItem.reduce((total, item) => {
                                                        return total + item.count * item.price
                                                    }, 0)}
                                                </span> ₴
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Check;