const {Customer}=require('../Model/customerModel')
const mongoose = require('mongoose')
const customerSchema=new mongoose.model("Customer",Customer)
const justCheck=(req,res) =>{
	res.send(req.body)
}
const addCustomer =(req,res) =>{
	const entity={
		name:req.body.name,
		id:req.body.id,
		address:req.body.address,
		age:req.body.age
	}


	new customerSchema(entity).save().then(()=>{
		res.send("success!");
	}).catch(err=>{res.send(err.message)})


}
const findCustomer = (req, res) => {
	customerSchema.find({name:req.body.name}).then((customer) => {
		res.send(customer)
	})
}
module.exports={addCustomer,findCustomer}