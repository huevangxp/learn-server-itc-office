const express = require('express')
const router = express.Router()

//import any route use here
const userRoute = require('./userRoute')

userRoute(router)

module.exports = router