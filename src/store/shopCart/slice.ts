import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {shopCartItem, shopCartItems} from "./types";

const initialState: shopCartItems = {
    CartItems: []
}

const shopCart = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addItem(state, {payload}: PayloadAction<shopCartItem>) {
            state.CartItems = [...state.CartItems, payload];
            localStorage.setItem('ProductItems', JSON.stringify(state.CartItems));
        },
        initCart(state) {
            state.CartItems = JSON.parse(localStorage.getItem("ProductItems") || "");
        },
        deleteItem(state, {payload}: PayloadAction<number>) {
            let cartItem = JSON.parse(localStorage.getItem("ProductItems") || "");
            cartItem = cartItem.filter((item:any)=>item.id!==payload);
            localStorage.setItem('ProductItems', JSON.stringify(cartItem));

            return {
                ...state,
                CartItems: [...state.CartItems].filter((item) => item.id !== payload)
            };
        },
    },
});

export const {addItem, deleteItem, initCart} = shopCart.actions;

export default shopCart.reducer;