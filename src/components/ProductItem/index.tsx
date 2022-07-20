import React, {FC} from 'react';
import ter from '../../img/500_500_1649768756Монтажнаяобласть5.jpg'
import CountProduct from "../CountProduct";
import st from './productItem.module.scss';
import {productItemType} from "../Product/types";

const ProductItem:FC<{productItem:productItemType[]}> = ({productItem}) => {
    return (
        <>
            {productItem.map((item) => (
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
                                <CountProduct catalog={true}/>
                            </div>
                        </div>
                        <div className="product__item_btn_wrapper">
                            <div className={st.product__item_btn}>
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