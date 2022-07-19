import React, {FC} from 'react';
import '../style/product.scss';
import Shops from "../components/Shops";


const Product:FC = () => {
    return (
        <div className="content">
            <div className="content_grid">
                <div className="shops">
                    <Shops/>
                </div>
                <div className="product">

                </div>
            </div>
        </div>
    );
};

export default Product;