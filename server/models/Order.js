import mongoose from 'mongoose';


const OrderModel = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    cart:{type:Array, required:true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    street: {type: String, required: true},
    house: {type: String, required: true},
    apartment: {type: String, required: true},
    floor: String,
    comment: String,
});

export default mongoose.model('Order', OrderModel);