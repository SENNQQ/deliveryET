import ProductModel from '../models/Product.js';

export const create = async (req, res) => {
    try {
        const store = req.body.store;
        if (store !== 'mc' && store !== 'bk' && store !== 'taco') {
            return res.status(400).json({
                success: false,
                message: 'Недопустимое значение параметра, store может принимать только: mc, bk, taco',
            });
        }

        const product = new ProductModel({
            title: req.body.title,
            weight: req.body.weight,
            price: req.body.price,
            image: req.body.image,
            count: req.body.count,
            description: req.body.description,
            store,
        });

        await product.save();
        return res.json({
            success: true,
            message: 'Продукт успешно добавлен',
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Не удалось создать товар',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const store = req.query.store;
        console.log(store)
        if (store) {
            if (store !== 'mc' && store !== 'bk' && store !== 'taco') {
                return res.status(400).json({
                    success: false,
                    message: 'Недопустимое значение параметра, store может принимать только: mc, bk, taco',
                });
            }
            const products = await ProductModel.find({store});
            return res.json({
                success: true,
                products,
            });
        }
        const products = await ProductModel.find();
        return res.json({
            success: true,
            products,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: 'Не удалось получить список товаров',
        });
    }
};