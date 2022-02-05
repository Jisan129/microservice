const express = require('express')
const app = express();
const {connectDB}=require("./config/connection")
const customerRoute= require("./services/customer/route/customerRoute")
const port = 3000;
const cors = require("cors")
const {corsOptions}=require("./config/cors")
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
configureApp = () => {
	app.use(cors(corsOptions));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }))
}
app.get('/', (req, res) => {
	res.send('Hello World!')
});
app.use('/customer',customerRoute)

app.get('/no',(req,res)=>{
res.send("no")
})
app.post('/',(req,res) =>{
	res.send(req.body);
})

app.listen(port, (res) => {
	connectDB()
	console.log(`Example app listening on port ${port}!`)
});


