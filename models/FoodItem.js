import mongoose from 'mongoose'

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
});

let FoodItem;
try {
    FoodItem = mongoose.model('FoodItem');
} catch {
    FoodItem = mongoose.model('FoodItem', foodItemSchema);
}

export default FoodItem;