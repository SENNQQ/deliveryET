import {Router} from 'express';
import * as ProductController from './controllers/ProductController.js';
import * as OrderController from './controllers/OrderController.js';
import {productCreateValidation} from './validators/product.js';
import validationError from './validators/handleValidationErrors.js';
import {orderCreateValidation} from './validators/order.js';
// Поправить валидацию заказов
const router = Router();

router.get('/product', ProductController.getAll);
router.post('/product', productCreateValidation, validationError, ProductController.create);
router.get('/order', OrderController.getAll);
router.post('/order', OrderController.create);

export default router;