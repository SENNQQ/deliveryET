import React from 'react';
import ProductItem from "../ProductItem";
import {useAppSelector} from "../../store/hook";
import Loading from "../Loading";

/**
 * Компонент для отрисовки продуктов */
const Product = () => {

    const product = useAppSelector(state => state.productState.product)
    const StatusProduct = useAppSelector(state => state.productState.status)

    return (
        <div className="product_list">
            {StatusProduct === 'loading' ? <Loading/> :  <ProductItem productItem={product}/>}
        </div>
    );
};

export default Product;