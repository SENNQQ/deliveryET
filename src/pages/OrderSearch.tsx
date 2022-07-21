import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import cn from "classnames";
import '../style/orderSearch.scss';
import OrderItem from "../components/OrderItem";

type searchOrderForm = {
    email: string,
    phone: string
}

const OrderSearch = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<searchOrderForm>();

    const onSubmit: SubmitHandler<searchOrderForm> = data => {
        console.log(data);
    };

    // сделать выравнивание по центру, пока нет ответа от сервера, как прейдет, тогда делаю по стандарту.

    return (
        <div className="content">
            <div className="content_gridSearch">
                <div className="content_search content_background">
                        <form action="src/pages/OrderSearch" onSubmit={handleSubmit(onSubmit)}>
                            <div className="content_search_gridItem">
                                <div className="content_block__title__sml
                                 content_search__marginZero__fontWeightBold">Поиск заказа</div>
                                <div className="content_formGroup__phone form_group">
                                    <div className="content_formGroup__input">
                                        <input placeholder="Телефон"
                                               type="text"
                                               className={cn({'formInvalidControl': errors.phone},
                                                   'form_control', 'input_lg')}
                                               {...register('phone', {
                                                   pattern: {
                                                       value: /^\d+$/,
                                                       message: 'Должен состоять только из цифр'
                                                   },
                                                   required: {
                                                       value: true,
                                                       message: 'Поле обязательное для заполнения',
                                                   },
                                                   minLength: {
                                                       value: 6,
                                                       message: 'Минимальная длина номера 9 символов',
                                                   },
                                                   maxLength: {
                                                       value: 12,
                                                       message: 'Максимальная длина номера 12 символов',
                                                   },
                                               })}/>
                                    </div>
                                    {errors.phone ?
                                        <div className="content_formGroupInvalid">
                                            {errors.phone.message}
                                        </div>
                                        : ''}
                                </div>

                                <div className="content_formGroup__email form_group">
                                    <div className="content_formGroup__input">
                                        <input placeholder="Почта"
                                               type="text"
                                               className={cn({'formInvalidControl': errors.email},
                                                   'form_control', 'input_lg')}
                                               {...register('email', {
                                                   required: {
                                                       value: true,
                                                       message: 'Поле обязательное для заполнения',
                                                   },
                                                   pattern: {
                                                       value: /^(([^<>()[\]\\.,;:\s@а-яА-ЯA-Z"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-z-]+\.)+[a-z]{2,}))$/,
                                                       message: 'Неверный формат почты, пример: test@test.test',
                                                   },
                                               })}/>
                                    </div>
                                    {errors.email ?
                                        <div className="content_formGroupInvalid">
                                            {errors.email.message}
                                        </div>
                                        : ''}
                                </div>
                                <div className="product__item_btn_wrapper product__item_zeroingStyle">
                                    <button className="product__item_btn search__size">
                                        <span>Выполнить</span>
                                    </button>
                                </div>
                            </div>

                        </form>
                </div>
                {/*после прихода ответа от сервера, проверить на наличия заказа и рендерить ордер item */}
                {/*<div className="content_found content_background">*/}
                {/*    <OrderItem orderItem={}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default OrderSearch;