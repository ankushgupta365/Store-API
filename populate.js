require('dotenv').config()
const connectDB = require('./db/connect')
const ProductSchema = require('./models/product')
const productsJSON = require('./products.json')

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await ProductSchema.deleteMany()
        await ProductSchema.create(productsJSON)
        console.log('Sucess!! created products')
        //process is global variable which will end the program after running the above lines
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()
