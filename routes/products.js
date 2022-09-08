const express = require('express')
const router = express.Router()
const {getAllProdutsStatic,getAllProducts} = require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProdutsStatic)
module.exports= router