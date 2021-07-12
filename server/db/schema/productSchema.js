const mongoose = require('mongoose');

export const productSchema = new mongoose.Schema({
    product: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
});

