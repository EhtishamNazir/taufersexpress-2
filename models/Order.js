import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerPhone: {
        type: Number,
        required: true
    },
    customerAddress: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: Number,
        required: true
    },
    orderDetails: {
        type: Array,
        required: true
    }
});

let Order;
try {
    Order = mongoose.model('Order');
} catch {
    Order = mongoose.model('Order', orderSchema);
}

export default Order;