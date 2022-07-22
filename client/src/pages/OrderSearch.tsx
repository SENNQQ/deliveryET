import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import cn from "classnames";
import '../style/orderSearch.scss';
import axios from "../axios";
import {toast} from "react-toastify";
import {receivingForm} from "./ShopCart";
import OrderItem from "../components/OrderItem";


type searchOrderForm = {
    email: string,
    phone: string
}

const OrderSearch:FC = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<searchOrderForm>();

    const [orderSearch, setOrderSearch] = useState<receivingForm[]>();

    const onSubmit: SubmitHandler<searchOrderForm> = async (dataForm) => {

        try {
            const {data} = await axios.get('/api/order', {
                params: {
                    phone: dataForm.phone,
                    email: dataForm.email,
                }
            });
            if (data.success && data.orders.length != 0) {
                reset();
                toast.success(data.message);
                setOrderSearch(data.orders);
            }
            else if(data.orders.length == 0){
                reset();
                toast.info('Заказ не найден. Телефон и почта должны совпадать. ');
            }
            else{
                toast.success(data.message);
            }

        } catch (e) {
            console.log(e);
        }
    };

    const [selectItemData, setSelectItemData] = useState<receivingForm>();

    const HandlerSelectData = (item:receivingForm):void => {
        setSelectItemData(item);
    }

    return (
        <div className="content">
            <div className="content_gridSearch">
                <div className="content_gridSearchForm">
                    <div className="content_search content_background">
                        <form action="src/pages/OrderSearch" onSubmit={handleSubmit(onSubmit)}>
                            <div className="content_search_gridItem">
                                <div className="content_block__title__sml
                                 content_search__marginZero__fontWeightBold">Поиск заказа
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
                                <div className="product__item_btn_wrapper product__item_zeroingStyle">
                                    <button className="product__item_btn search__size">
                                        <span>Выполнить</span>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                    {selectItemData &&
                        <div className="content_foundData content_background">
                            <div className="content_formGroup__name form_group">
                                <div className="content_formGroup__input">
                                    <input placeholder="Имя"
                                           type="text"
                                           value={selectItemData.name}
                                           disabled={true}
                                           className={cn('form_control', 'input_lg')}/>
                                </div>
                            </div>
                            <div className="content_formGroup__phone form_group">
                                <div className="content_formGroup__input">
                                    <input placeholder="Телефон"
                                           type="text"
                                           value={selectItemData.phone}
                                           disabled={true}
                                           className={cn('form_control', 'input_lg')}/>
                                </div>
                            </div>
                            <div className="content_formGroup__email form_group">
                                <div className="content_formGroup__input">
                                    <input placeholder="Почта"
                                           type="text"
                                           value={selectItemData.email}
                                           disabled={true}
                                           className={cn( 'form_control', 'input_lg')}/>
                                </div>
                            </div>
                            <div className="content_formGroup__city form_group">
                                <div className="content_formGroup__input">
                                    <input placeholder="Город"
                                           type="text"
                                           value={selectItemData.city}
                                           disabled={true}
                                           className={cn('form_control', 'input_lg')}/>
                                </div>
                            </div>
                            <div className="content_formGroup__street form_group">
                                <div className="content_formGroup__input">
                                    <input placeholder="Улица"
                                           value={selectItemData.street}
                                           disabled={true}
                                           type="text"
                                           className={cn('form_control', 'input_lg')}/>
                                </div>
                            </div>
                            <div className="content_formGroup__input">
                                <input placeholder="Дом"
                                       value={selectItemData.house}
                                       disabled={true}
                                       type="text"
                                       className={cn('form_control', 'input_lg')}/>
                            </div>
                        </div>
                    }
                </div>
                <>
                    {orderSearch && orderSearch.length !==0 && <div className="content_found content_background">
                            <div className="content_SearchOrder">

                                {orderSearch?.map((item)=>  <OrderItem orderItem={item.cart} idOrder={item._id} key={item._id}
                                                                       HandlerItem={item}
                                                                       HandlerGetData={HandlerSelectData}/>)}
                            </div>
                        </div>}
                </>

            </div>
        </div>
    );
};

export default OrderSearch;