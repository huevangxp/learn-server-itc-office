const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

// import file
const router = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.use('/',router)

const port = process.env.PORT || 9000
app.listen(port,()=>console.log('server running on port',port))