import React from 'react';
import ter from "../img/500_500_1649768756Монтажнаяобласть5.jpg";
import '../style/shopCart.scss';
import CountProduct from "../components/CountProduct";
import {SubmitHandler, useForm} from "react-hook-form";

type receivingForm = {
    name: string;
    phone: string;
    email: string;
    city: string;
    street: string;
    house: string;
    apartment: string;
    comment: string;
}

const ShopCart = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<receivingForm>();

    const onSubmit: SubmitHandler<receivingForm> = data => {
        console.log(data);
    };

    return (
        <div className="content">
            <div className="content_block">
                <div className="content_block__title">Заказ</div>
                <div className="content_order">
                    <div className="content_order__row">
                        <div className="content_order__row__image">
                            <img src={ter} alt="ter" />
                        </div>
                        <div className="content_order__row__title__grid">
                            <div className="content_order__row__title">
                                Курица терияки  с рисом
                            </div>
                            <div className="content_order__row__subtitle"></div>
                        </div>
                        <div className="content_order__row__price content_order__row_flex_center">
                            135 ₴
                        </div>
                        <div className="content_order__row__minus_plus_number content_order__row_flex_center">
                            <CountProduct/>
                        </div>
                        <div className="content_order__row__delete content_order__row_flex_center">
                             <span className="delete" id="324252"></span>
                        </div>
                    </div>
                    <hr/>
                    <div className="content_order__row">
                        <div className="content_order__row__image">
                            <img src={ter} alt="ter" />
                        </div>
                        <div className="content_order__row__title__grid">
                            <div className="content_order__row__title">
                                Курица терияки  с рисом
                            </div>
                            <div className="content_order__row__subtitle"></div>
                        </div>
                        <div className="content_order__row__price content_order__row_flex_center">
                            135 ₴
                        </div>
                        <div className="content_order__row__minus_plus_number content_order__row_flex_center">
                            <CountProduct/>
                        </div>
                        <div className="content_order__row__delete content_order__row_flex_center">
                            <span className="delete" id="324252"></span>
                        </div>
                    </div>
                </div>
                <div className="content_block__title">Получение</div>
                <div className="content_receiving">
                    <div className="content_receiving_block">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;