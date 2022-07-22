import React, {FC} from 'react';
import mc from "../../img/txgzy5f119afvmq7znvp.avif";
import burgerKing from "../../img/zx7udzwuopreaoqarfhj.jpg";
import taco from "../../img/akivf28yymtqggy5cxzl.avif";
import st from './shops.module.scss';
import {fetchAllProduct, fetchProductBrand} from "../../store/product/slice";
import {useAppDispatch} from "../../store/hook";
import cn from "classnames";

type ShopsType = {
    onHandlerCLick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
    onHandlerAllStore: () => void,
    store: string[],
    selectStore: string
}

// Сделал магазины в БД и получать их оттуда
/**
 * Компонент для отрисовки магазинов, фильтрация магазинов */
const Shops: FC<ShopsType> = ({
                                  onHandlerCLick,
                                  onHandlerAllStore,
                                  store,
                                  selectStore}) => {

    const dispatch = useAppDispatch();

    const fetchProductsBrand = (img:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        dispatch(fetchProductBrand(img.currentTarget.alt));
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
                             className={cn(st.choose__block_item__image,
                                 {"filterSelect":selectStore !== 'all' && selectStore !== 'mc'})}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
                                 fetchProductsBrand(imgCLick);
                                 onHandlerCLick(imgCLick);
                             }}
                        />
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={cn(st.choose__block_item__light,
                            {"backgroundSelect":selectStore !== 'all' && selectStore !== 'mc'})}>McDonald's</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <div className={st.choose__block_item__image_wrapper}>
                        <img src={burgerKing} alt="bk"
                             className={cn(st.choose__block_item__image,
                                 {"filterSelect": selectStore !== 'all' && selectStore !== 'bk'})}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=> {
                                 fetchProductsBrand(imgCLick);
                                 onHandlerCLick(imgCLick);
                             }}/>
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={cn(st.choose__block_item__light,
                            {"backgroundSelect":selectStore !== 'all' && selectStore !== 'bk'})}>Burger king</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <div className={st.choose__block_item__image_wrapper}>
                        <img src={taco} alt="taco"
                             className={cn(st.choose__block_item__image,
                                 {"filterSelect": selectStore !== 'all' && selectStore !== 'taco'})}
                             onClick={(imgCLick:React.MouseEvent<HTMLImageElement, MouseEvent>)=>{
                                 fetchProductsBrand(imgCLick);
                                 onHandlerCLick(imgCLick);
                             }}/>
                    </div>
                    <h3 className={st.choose__block_item__title}>
                        <span className={cn(st.choose__block_item__light,
                            {"backgroundSelect":selectStore !== 'all' && selectStore !== 'taco'})}>taco</span>
                    </h3>
                </div>
                <div className={st.choose__block_item}>
                    <h3 className={st.choose__block_item__title}  onClick={()=>{
                        fetchProductsAll();
                        onHandlerAllStore();
                    }}>
                        <span className={st.choose__block_item__light}>Все магазины</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Shops;