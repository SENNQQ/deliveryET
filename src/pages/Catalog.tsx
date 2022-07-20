import React, {FC} from 'react';
import '../style/product.scss';
import Shops from "../components/Shops";
import Product from "../components/Product";

const Catalog:FC = () => {

    return (
        <div className="content">
            <div className="content_grid">
                <div className="shops">
                    <Shops/>
                </div>
                <div className="product">
                   <Product/>
                </div>
            </div>
        </div>
    );
};

export default Catalog;