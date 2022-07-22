import React, {FC} from 'react';
import OrderItem from "../OrderItem";
import {useAppSelector} from "../../store/hook";

/**
 * Компонент заказа */
const Order:FC = () => {

    const orderData = useAppSelector(state => state.shopCart.CartItems);

    return (
        <>
            <OrderItem orderItem={orderData}/>
        </>
    );
};

export default Order;