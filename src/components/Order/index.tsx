import React from 'react';
import OrderItem from "../OrderItem";
import {useAppSelector} from "../../store/hook";

const Order = () => {

    const orderData = useAppSelector(state => state.shopCart.CartItems);


    return (
        <>
            <OrderItem orderItem={orderData}/>
        </>
    );
};

export default Order;