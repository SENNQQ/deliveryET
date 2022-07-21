import mongoose from 'mongoose';


const ProductModel = new mongoose.Schema({
    title: {type: String, required: true},
    weight: {type: Number, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    store: {type: String, default: 'mc'},
    description: String,
});

export default mongoose.model('Product', ProductModel);