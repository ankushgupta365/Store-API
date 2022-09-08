const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please specify the name of the product']
    },
    price: {
        type: Number,
        required: [true, 'Please specify the price of the product']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    featured: {
        type: Boolean,
        default: false
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{Value} is not supported'
        }
    }
})
module.exports = mongoose.model('Product', productSchema)