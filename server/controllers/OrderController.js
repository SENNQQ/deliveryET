import OrderModel from '../models/Order.js';

export const create = async (req, res) => {
    try {
        const product = new OrderModel({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            cart:req.body.cart,
            city: req.body.city,
            street: req.body.street,
            house: req.body.house,
            apartment: req.body.apartment,
            floor: req.body.floor,
            comment: req.body.comment,
        });
        await product.save();
        return res.json({
            success: true,
            message: 'Заказ успешно создан',
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Не удалось создать заказ',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        if (req.query.phone && req.query.email) {
            const orders = await OrderModel.find({phone: req.query.phone, email: req.query.email});
            console.log('нашло 1')
            return res.json({
                success: true,
                orders,
            });
        }
        if (req.query.email) {
            const orders = await OrderModel.find({email: req.query.email});
            return res.json({
                success: true,
                orders,
            });
        }
        if (req.query.phone) {
            const orders = await OrderModel.find({phone: req.query.phone});
            return res.json({
                success: true,
                orders,
            });
        }
        const orders = await OrderModel.find();
        return res.json({
            success: true,
            orders,
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Не удалось получить список заказов',
        });
    }
};