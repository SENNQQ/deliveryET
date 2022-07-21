import {body} from 'express-validator';

export const productCreateValidation = [
    body('title', 'Укажите заголовок, минимальная длина 5 символов').isLength({min: 5}),
    body('weight', 'Неверный формат, мимальное значение: 1').isInt({min: 1}),
    body('price', 'Неверный формат цены, мимальное значение: 1').isInt({min: 1}),
    body('store', 'Укажите магазин').isString(),
    body('image', 'Неверный формат, укажите путь к картинке').isString(),
    body('description', 'Укажите описание, минимальная длина 5 символов').optional().isLength({min: 5}),
];