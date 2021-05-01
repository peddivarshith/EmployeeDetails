const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
//creating a sever and refered by app object
const app= express()

//collection variable is declared as global variable
var collection;

MongoClient.connect('mongodb://localhost:27017/Analysis',(err,database) =>{
	if(err) return console.log(err)
		
	collection = database.db('Analysis')
	app.listen(5000, () =>{
		console.log('Listening at port number 5000')
	})
})

app.set('view engine','ejs')
//It parses the incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/',(req,res) => {
	collection.collection('Salaries').find().toArray((err,result) =>{
		if(err)return console.log(err);
		res.render('home.ejs', { data:result})
	
	})
})
//page urls

app.get('/createEmployee', (req,res) =>{
	res.render('addEmployee.ejs')
})


app.get('/updateEmployeeDetails', (req,res) => {
	res.render('updateEmployee.ejs')
})


app.get('/deleteEmployeeDetails', (req,res) =>{
	res.render('deleteEmployee.ejs')
})

app.get('/visualizeEmployeeDetails', (req,res) =>{
	res.render('visual.ejs');
})

app.get('/details', (req,res) =>{
	collection.collection('Salaries').find().toArray((err,result) =>{
		if(err)return console.log(err);
	res.json(result);
	
	})
})
//Data changes in mongodb
app.post('/AddEmployee', (req,res) =>{
	console.log("reg-object:"+req);
	console.log(req.body);
	collection.collection('Salaries').save(req.body, (err,result) =>{
		if(err) return console.log(err)
	res.redirect('/')
	})
})

app.post('/UpdateEmployee', (req,res) =>{
	collection.collection('Salaries').findOneAndUpdate({empId:req.body.empId},{
	$set : {salary_more_then_100k:req.body.salary}},{sort:{_id:-1}},
	(err,result) =>{
		if(err)return res.send(err);
		else res.redirect('/')
	})
})

app.post('/DeleteEmployee',(req,res) => {
	collection.collection('Salaries').findOneAndDelete({empId:req.body.empId},(err,result) =>{
		if(err)return res.send(err);
		else res.redirect('/')
	})
})
