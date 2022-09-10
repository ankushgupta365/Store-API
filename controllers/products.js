const ProductModel = require('../models/product')
const getAllProdutsStatic = async (req,res) =>{
    const products = await ProductModel.find({})
    res.status(200).json({products,noHits: products.length})
}
const getAllProducts= async (req,res) =>{
    const {featured,name,company, sort, fields} = req.query
    const querySelector = {}
    if(featured){
        querySelector.featured = featured === 'true'?true: false
    }
    if(name){
        //below regex is for case insensitive search with query with key name
        querySelector.name = {$regex: name, $options: 'i'}
    }
    if(company){
        querySelector.company = company
    }

    let results =  ProductModel.find(querySelector)
    if(sort){
        const sortList = sort.split(',').join(' ')
        results.sort(sortList)
    }else{
        results.sort('createdAt')
    }
    if(fields){
        const fieldsList = fields.split(',').join(' ')
        results.select(fieldsList)
    }
    const products = await results
    res.status(200).json({products, noHits: products.length})
}
module.exports = {
    getAllProducts,
    getAllProdutsStatic
}