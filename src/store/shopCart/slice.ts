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
            const indexExist = state.CartItems.find((item) => item.id === payload.id);
            if(indexExist){
                const indexItem = state.CartItems.findIndex((item) => item.id === payload.id);
                state.CartItems[indexItem].count += payload.count;
                localStorage.setItem('ProductItems', JSON.stringify(state.CartItems));
            }
            else{
                state.CartItems = [...state.CartItems, payload];
                localStorage.setItem('ProductItems', JSON.stringify(state.CartItems));
            }
        },
        initCart(state) {
           try {
               state.CartItems = JSON.parse(localStorage.getItem("ProductItems") || "");
           }catch (e) {
              localStorage.setItem("ProductItems", JSON.stringify(state.CartItems));
           }
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
        changeCountItem(state, {payload}: PayloadAction<[shopCartItem, number]>) {
            const indexItem = state.CartItems.findIndex((item) => item.id === payload[0].id);
            state.CartItems[indexItem].count = payload[1];
            localStorage.setItem('ProductItems', JSON.stringify(state.CartItems));
        },
    },
});

export const {addItem, deleteItem, initCart, changeCountItem} = shopCart.actions;

export default shopCart.reducer;