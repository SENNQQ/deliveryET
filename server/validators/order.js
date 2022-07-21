import {body} from 'express-validator';

export const orderCreateValidation = [
    body('name', 'Укажите имя, минимальная длина 3 символа').isLength({min: 3}),
    body('phone', 'Укажите номер телефона').isString(),
    body('email', 'Укажите почту').isString(),
    body('city', 'Укажите город').isString(),
    body('street', 'Укажите номер улицы, минимальное значение 1').isInt({min: 1}),
    body('house', 'Укажите номер дома, минимальное значение 1').isInt({min: 1}),
    body('apartment', 'Укажите номер квартиры, минимальное значение 1').isInt({min: 1}),
    body('floor', 'Укажите этаж, минимальное значение 1').optional().isInt({min: 1}),
    body('comment', 'Укажите комментарий, минимальная длина 10 символов').optional().isLength({min: 10}),
];