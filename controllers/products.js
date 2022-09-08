const getAllProdutsStatic = async (req,res) =>{
    res.status(200).json({msg: 'products static received'})
}
const getAllProducts= async (req,res) =>{
    res.status(200).json({msg: 'products received'})
}
module.exports = {
    getAllProducts,
    getAllProdutsStatic
}