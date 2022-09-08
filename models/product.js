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
        //enum below speciefy that only these companies will be selected 
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{Value} is not supported'
        }
    }
})
// first parameter will be the collection name in the database converted into lowercase
module.exports = mongoose.model('Product', productSchema)