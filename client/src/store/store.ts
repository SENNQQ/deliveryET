import {configureStore} from '@reduxjs/toolkit';
import shopCartReducer from './shopCart/slice';
import productReducer from "./product/slice";

const store = configureStore({
    reducer: {
        shopCart:shopCartReducer,
        productState:productReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;