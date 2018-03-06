var express=require('express');
var app=express();
var mongojs=require('mongojs');
var bodyParser=require('body-parser');
var db=mongojs('contactlist',['contactlist']);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/contactlist',function(req,res){
	console.log('i recieved a get req');
     db.contactlist.find(function(err,docs){
          console.log(docs);
          res.json(docs);
     });
     
	// person1 = {
     	// name:'Amrith',
     	// email:'amr',
     	// phone:'777'};
     // person2 = {
     	// name:'Su',
     	// email:'latha',
     	// phone:'888'};
     // person3 = {
     // name:'pa',
     	// email:'pvt',
     	// phone:'999'
     // };
     // var contactlist = [person1, person2, person3];
     // res.json(contactlist);
});
var contacts = require('./routes/contacts');
app.use('/contacts',contacts);

app.listen(3000);
console.log("server up");
