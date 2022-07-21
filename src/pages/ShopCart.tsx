import React from 'react';
import '../style/shopCart.scss';
import {SubmitHandler, useForm} from "react-hook-form";
import cn from "classnames";
import {useAppSelector} from "../store/hook";
import Order from "../components/Order";
import clear from "../img/cart-empty.png";

type receivingForm = {
    name: string;
    phone: string;
    email: string;
    city: string;
    street: string;
    house: string;
    apartment: string;
    floor: string;
    comment: string;
}

const ShopCart = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<receivingForm>();

    const onSubmit: SubmitHandler<receivingForm> = data => {
        console.log(data);
    };

    const cartItem = useAppSelector(state => state.shopCart.CartItems);

    // @ts-ignore
    console.log(cartItem.reduce((total, item) => {
        return total + item.count * item.price
    }, 0));

    return (
        <div className="content">
            <div className="content_block">
                {cartItem.length == 0 ?
                    <div className="image_clear">
                        <img src={clear} alt=""/>
                        <div className="text_clear">Тут пусто.</div>
                        <div className="text_clear"> Добавь блюдо в корзину</div>
                    </div>
                    :
                    <>
                        <div className="content_block__title">Заказ</div>
                        <div className="content_order">
                            <Order/>
                        </div>
                        <div className="content_block__title">Получение</div>
                        <div className="content_receiving">
                            <div className="content_receiving_block content_receiving_data">
                                <form id="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="content_block__title content_block__title__sml">Данные:</div>
                                    <div className="content_formGroup contact_details">
                                        <div className="content_formGroup__name form_group">
                                            <div className="content_formGroup__input">
                                                <input placeholder="Имя"
                                                       type="text"
                                                       className={cn({'formInvalidControl': errors.name},
                                                           'form_control', 'input_lg')}
                                                       {...register('name',
                                                           {
                                                               required: {
                                                                   value: true,
                                                                   message: 'Поле обязательное для заполнения',
                                                               },
                                                               minLength: {
                                                                   value: 2,
                                                                   message: 'Минимальная длина 2 символа',
                                                               },
                                                               maxLength: {
                                                                   value: 15,
                                                                   message: 'Максимальная длина  15 символов',
                                                               }
                                                           })}
                                                />
                                            </div>
                                            {errors.name ?
                                                <div className="content_formGroupInvalid">
                                                    {errors.name.message}
                                                </div>
                                                : ''}
                                        </div>
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
                                    </div>
                                    <div className="content_block__title content_block__title__sml">Адрес:</div>
                                    <div className="content_form_group delivery_details">
                                        <div className="content_form_group__gridCenter">
                                            <div className="content_formGroup__city form_group">
                                                <div className="content_formGroup__input">
                                                    <input placeholder="Город"
                                                           type="text"
                                                           className={cn({'formInvalidControl': errors.city},
                                                               'form_control', 'input_lg')}
                                                           {...register('city', {
                                                               required: {
                                                                   value: true,
                                                                   message: 'Поле обязательное для заполнения',
                                                               }
                                                           })}/>
                                                </div>
                                                {errors.city ?
                                                    <div className="content_formGroupInvalid">
                                                        {errors.city.message}
                                                    </div>
                                                    : ''}
                                            </div>
                                            <div className="content_formGroup__street form_group">
                                                <div className="content_formGroup__input">
                                                    <input placeholder="Улица"
                                                           type="text"
                                                           className={cn({'formInvalidControl': errors.street},
                                                               'form_control', 'input_lg')}
                                                           {...register('street', {
                                                               required: {
                                                                   value: true,
                                                                   message: 'Поле обязательное для заполнения',
                                                               },
                                                               minLength: {
                                                                   value: 4,
                                                                   message: 'Минимальная длина 4 символа',
                                                               },
                                                           })}/>
                                                </div>
                                                {errors.street ?
                                                    <div className="content_formGroupInvalid">
                                                        {errors.street.message}
                                                    </div>
                                                    : ''}
                                            </div>
                                        </div>
                                        <div className="content_formGroup__house form_group">
                                            <div className="content_formGroup__input">
                                                <input placeholder="Дом"
                                                       type="text"
                                                       className={cn({'formInvalidControl': errors.house},
                                                           'form_control', 'input_lg')}
                                                       {...register('house', {
                                                           required: {
                                                               value: true,
                                                               message: 'Поле обязательное для заполнения',
                                                           },
                                                       })}/>
                                            </div>
                                            {errors.house ?
                                                <div className="content_formGroupInvalid">
                                                    {errors.house.message}
                                                </div>
                                                : ''}
                                        </div>
                                        <div className="content_formGroup__apartment form_group">
                                            <div className="content_formGroup__input">
                                                <input placeholder="Квартира"
                                                       type="text"
                                                       className={cn({'formInvalidControl': errors.apartment},
                                                           'form_control', 'input_lg')}
                                                       {...register('apartment', {
                                                           required: {
                                                               value: true,
                                                               message: 'Поле обязательное для заполнения',
                                                           }
                                                       })}/>
                                            </div>
                                            {errors.apartment ?
                                                <div className="content_formGroupInvalid">
                                                    {errors.apartment.message}
                                                </div>
                                                : ''}
                                        </div>
                                        <div className="content_formGroup__floor form_group">
                                            <div className="content_formGroup__input">
                                                <input placeholder="Этаж"
                                                       type="text"
                                                       className={cn({'formInvalidControl': errors.floor},
                                                           'form_control', 'input_lg')}
                                                       {...register('floor', {
                                                           maxLength: {
                                                               value: 3,
                                                               message: 'Максимальная длина 3 символа',
                                                           },
                                                       })}/>
                                            </div>
                                            {errors.floor ?
                                                <div className="content_formGroupInvalid">
                                                    {errors.floor.message}
                                                </div>
                                                : ''}
                                        </div>
                                        <div className="content_formGroup__comment form_group">
                                            <div className="content_formGroup__input">
                                        <textarea placeholder="Комментарий"
                                                  className={cn({'formInvalidControl': errors.comment},
                                                      'form_control_textArea', 'input_lg')}
                                                  {...register('comment', {
                                                      minLength: {
                                                          value: 4,
                                                          message: 'Минимальная длина 4 символов',
                                                      },
                                                  })}/>
                                            </div>
                                            {errors.comment ?
                                                <div className="content_formGroupInvalid">
                                                    {errors.comment.message}
                                                </div>
                                                : ''}
                                        </div>
                                    </div>
                                    <div className="product__item_btn_wrapper">
                                        <button className="product__item_btn">
                                            <span>Оформить заказ</span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                            <div className="content_receiving_check">

                                {/*Компонент*/}
                                <div className="cart_check">
                                    <div className="cart_check__title">Ваш чек:</div>
                                    <ul className="cart_check_list">
                                        <li>
                                            <div className="cart_check__left">Всего на сумму</div>
                                            <div className="cart_check__right">
                                                <span>
                                                    {cartItem.reduce((total, item) => {
                                                        return total + item.count * item.price
                                                    }, 0)}
                                                </span> ₴
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart_check__left orange">К оплате:</div>
                                            <div className="cart_check__right orange">
                                                <span>
                                                    {cartItem.reduce((total, item) => {
                                                        return total + item.count * item.price
                                                    }, 0)}
                                                </span> ₴
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </>

                }

            </div>
        </div>
    );
};

export default ShopCart;