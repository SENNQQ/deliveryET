import React, {FC} from 'react';
import '../style/product.scss';
import Shops from "../components/Shops";
import ter from "../img/500_500_1649768756Монтажнаяобласть5.jpg";

const Product:FC = () => {
    return (
        <div className="content">
            <div className="content_grid">
                <div className="shops">
                    <Shops/>
                </div>
                <div className="product">
                    {/*компонент*/}
                    <div className="product_list">
                        <div className="product__item">
                            <div className="product__item__block">
                                <div className="product__item__block__image">
                                    <img src={ter} alt="ter" />
                                </div>
                                <div className="product__item__block__title">
                                    Яичница с курицей и овощами гриль
                                </div>
                                <div className="product__item__block__weight">
                                    Вес: 250 g
                                </div>
                                <div className="product__item__block__description">
                                    Яичница глазунья с куриным бедром, запеченным картофелем и приготовленными на гриле помидорами и грибами.
                                </div>
                            </div>
                            <div className="product__item__add_to_card">
                                <div className="product__item_line">
                                    <div className="product__item_line__price">
                                        143 UAH
                                    </div>
                                    {/*компонент*/}
                                    <div className="product__item_line_count">
                                       <div className="minus_plus_number">
                                           <div className="btnmp minus">
                                               <svg width=".7291vw" height=".7291vw" viewBox="0 0 14 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                   <rect x="14" y="6" width="2" height="14" rx="1"
                                                         transform="rotate(90 14 6)" fill="#B4BDC6"></rect>
                                               </svg>
                                           </div>
                                           <div className="field_number">
                                               1
                                           </div>
                                           <div className="btnmp plus">
                                               <svg width=".7291vw" height=".7291vw" viewBox="0 0 14 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                   <rect x="6.00098" width="2" height="14" rx="1" fill="#B4BDC6"></rect>
                                                   <rect x="14" y="6.00098" width="2" height="14" rx="1"
                                                         transform="rotate(90 14 6.00098)" fill="#B4BDC6"></rect></svg>
                                           </div>
                                       </div>
                                    </div>

                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;