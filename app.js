const express = require('express')
const cors = require('cors')
const collection = require('./mongo')
const app = express();
app.use(express.json())
app.use(cors())

app.listen(8001,()=>{
    console.log('server running at port 8001')
})