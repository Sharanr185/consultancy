 const mongoose=require('mongoose')
 const Customerschema=new mongoose.Schema({
     name:String,
     email:String,
     password:String
 })

 const CustomerModel=mongoose.model("register", Customerschema)
 module.exports=CustomerModel

