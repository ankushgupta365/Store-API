require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//home route
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">see in action here</a>')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async ()=>{
    //connect Db
    try {
        app.listen(port,console.log(`Server is running on port ${port}...`))
    } catch (error) {
        
    }
}

start()