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
        results = results.sort(sortList)
    }else{
        results =results.sort('createdAt')
    }
    if(fields){
        const fieldsList = fields.split(',').join(' ')
        results = results.select(fieldsList)
    }

    // pagination and limit
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10  //by default 10 is the limit of objects to fetch
    const skip = (page - 1) * limit       // if limit is 10 and page is 2 then, skip will be 10, so it will show the objects after skipping 10 objects from the results

    results = results.skip(skip).limit(limit)

    const products = await results
    res.status(200).json({products, noHits: products.length})
}
module.exports = {
    getAllProducts,
    getAllProdutsStatic
}