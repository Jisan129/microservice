const express = require('express');
const route = express.Router()
const app = express();
const {addCustomer,findCustomer}= require('../controller/customerController')
app.use(express.json());
app.use(express.urlencoded({extended: false}))

route.get('/ok',(req,res) =>{
	res.send("Ok done")
})
route.post('/ok',addCustomer)

route.post('/check',findCustomer)

module.exports=route