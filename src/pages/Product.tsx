import React, {FC} from 'react';
import '../style/product.scss';
import Shops from "../components/Shops";
import ter from "../img/500_500_1649768756Монтажнаяобласть5.jpg";
import CountProduct from "../components/CountProduct";

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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
                                    </div>
                                </div>
                                <div className="product__item_btn_wrapper">
                                    <div className="product__item_btn">
                                        <span>Добавить в корзину</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="product__item_line_count">
                                        <CountProduct/>
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