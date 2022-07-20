import React, {FC, useEffect, useMemo} from 'react';
import ter from '../../img/500_500_1649768756Монтажнаяобласть5.jpg'
import CountProduct from "../CountProduct";
import st from './productItem.module.scss';
import {productItemType} from "../Product/types";
import {useAppDispatch} from "../../store/hook";
import {addItem} from "../../store/shopCart/slice";

const ProductItem:FC<{productItem:productItemType[]}> = ({productItem}) => {

    const dispatch = useAppDispatch();

    const refs = useMemo(() => productItem.map(() => React.createRef<HTMLInputElement>()), []);

    // пофиксить ошибку
    const addToCartShop = (item:productItemType, indexRef:number):void =>{
        console.log(refs[indexRef]);
        console.log(parseInt(refs[indexRef].current!.value));
        console.log(item);
        item.count = parseInt(refs[indexRef].current!.value);
        dispatch(addItem(item));
    }

    useEffect(() => {
        // @ts-ignore
        refs[0].current.focus();
    }, [productItem]);

    return (
        <>
            {productItem.map((item,index) => (
                <div className={st.product__item} key={item.id}>
                    <div className={st.product__item__block}>
                        <div className={st.product__item__block__image}>
                            <img src={ter} alt="ter" />
                        </div>
                        <div className={st.product__item__block__title}>
                            {item.title}
                        </div>
                        <div className={st.product__item__block__weight}>
                            Вес: {item.weight} g
                        </div>
                        <div className={st.product__item__block__description}>
                            {item.description}
                        </div>
                    </div>
                    <div className={st.product__item__add_to_card}>
                        <div className={st.product__item_line}>
                            <div className={st.product__item_line__price}>
                                {item.price} UAH
                            </div>
                            <div className={st.product__item_line_count}>
                                <CountProduct countItem={item.count} catalog={true} refInput={refs[index]}/>
                            </div>
                        </div>
                        <div className="product__item_btn_wrapper">
                            <div className={st.product__item_btn} onClick={()=>addToCartShop(item, index)}>
                                <span>Добавить в корзину</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductItem;