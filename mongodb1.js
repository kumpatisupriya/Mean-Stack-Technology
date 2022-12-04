const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected");
else
console.log("DB  connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number
});
const nm=new mongoose.model("records",ns);
//Finding Sepecific record(if there are similar records,it returns the first occurrence )
//find func returns the whole table.
nm.findOne({name:'Supriya'},function(err,data){
if(err){
console.log(err);
}
else{
console.log("First function call:",data);
}
});
