import React, {FC, useState} from 'react';
import '../style/product.scss';
import Shops from "../components/Shops";
import Product from "../components/Product";
import {useAppSelector} from "../store/hook";

const Catalog:FC = () => {

    const products = useAppSelector(state => state.productState.product);


    const [selectStore, setSelectStore] = useState<string>('all');
    const store = React.useMemo(() => [...(products.map(n => n.store))], [ products ]);

    const AllShop = ():void => {
        setSelectStore('all');
    };

    const onShopChange = (select:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setSelectStore(select.currentTarget.alt);
    };

    return (
        <div className="content">
            <div className="content_grid">
                <div className="shops">
                    <Shops onHandlerCLick={onShopChange} onHandlerAllStore={AllShop} store={store} selectStore={selectStore}/>
                </div>
                <div className="product">
                   <Product/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;