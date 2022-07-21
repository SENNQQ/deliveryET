import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {products, productType, StatusType} from "./types";
import {shopCartItem} from "../shopCart/types";
import axios from "../../axios";

const initialState: products = {
    product: [],
    status: StatusType.IDLE,
}

export const fetchAllProduct = createAsyncThunk<shopCartItem[], void>('product/fetchProduct', async () => {
    const {data} = await axios.get('/api/product');
    return data.products;
});

export const fetchProductBrand = createAsyncThunk<shopCartItem[], string>('product/fetchProductBrand',
    async (brand) => {
        const {data} = await axios.get(`/api/product/`,{
            params:{store:brand}
        });
        return data.products;
    });

const product = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectionProduct(state, {payload}: PayloadAction<productType>) {

        },
        initProduct(state) {
            try {
                // state.product = JSON.parse(localStorage.getItem("ProductItems") || "");
            } catch (e) {
                localStorage.setItem("ProductItems", JSON.stringify(state.product));
            }
        },

    },
    extraReducers: builder => {
        builder.addCase(fetchAllProduct.pending, state => {
            state.status = StatusType.LOADING;
            state.product = [];
        });
        builder.addCase(fetchAllProduct.fulfilled, (state, {payload}) => {
            state.status = StatusType.SUCCESS;
            state.product = payload;
        });
        builder.addCase(fetchAllProduct.rejected, state => {
            state.status = StatusType.ERROR;
            state.product = [];
        });
        builder.addCase(fetchProductBrand.pending, state => {
            state.status = StatusType.LOADING;
            state.product = [];
        });
        builder.addCase(fetchProductBrand.fulfilled, (state, {payload}) => {
            state.status = StatusType.SUCCESS;
            state.product = payload;
        });
        builder.addCase(fetchProductBrand.rejected, state => {
            state.status = StatusType.ERROR;
            state.product = [];
        });
    },
});

export const {selectionProduct} = product.actions;

export default product.reducer;