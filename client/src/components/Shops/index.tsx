import React, {FC} from 'react';
import mc from "../../img/txgzy5f119afvmq7znvp.avif";
import burgerKing from "../../img/zx7udzwuopreaoqarfhj.jpg";
import taco from "../../img/akivf28yymtqggy5cxzl.avif";
import st from './shops.module.scss';
import {fetchAllProduct, fetchProductBrand} from "../../store/product/slice";
import {useAppDispatch} from "../../store/hook";


const Shops:FC = () => {

    const dispatch = useAppDispatch();

    const fetchProductsBrand = (imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        dispatch(fetchProductBrand(imgCLick.currentTarget.alt));
    }

    const fetchProductsAll = () => {
        dispatch(fetchAllProduct());
    }

    return (
        <div className={[st.select__shops, st.select__shops_padding].join(' ')}>
            <div className={st.select__shops_title}>
                Выберите магазин:
                <hr/>
            </div>
            <div className={st.choose__block}>
                <div className={st.choose__block_item}>
                    <div className={st.choose__block_item__image_wrapper}>
                        <img src={mc} alt="mc"
                             className={st.choose__block_item__image}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=>fetchProductsBrand(imgCLick)}
                        />
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={st.choose__block_item__light}>McDonald's</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <div className={st.choose__block_item__image_wrapper}>
                        <img src={burgerKing} alt="bk"
                             className={st.choose__block_item__image}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=>fetchProductsBrand(imgCLick)}/>
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={st.choose__block_item__light}>Burger king</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <div className={st.choose__block_item__image_wrapper}>
                        <img src={taco} alt="taco"
                             className={st.choose__block_item__image}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=>fetchProductsBrand(imgCLick)}/>
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={st.choose__block_item__light}>taco</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <h3 className={st.choose__block_item__title}  onClick={()=>fetchProductsAll()}>
                        <span className={st.choose__block_item__light}>Все магазины</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Shops;