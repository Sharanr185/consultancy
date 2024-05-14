const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const CustomerModel=require('./models/Customer');
const axios = require('axios');
const ContactModel=require('./models/Contact');

const app = express()
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Ganeshastores")
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log("err");
})

app.post("/",(req,res) =>{
    const {email,password}=req.body;
    CustomerModel.findOne({email: email})
    .then(user =>{
        if(user)
        {
            if(user.password===password)
            {
                res.json("Success");
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else
        {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req, res) => {
    console.log('Received data:', req.body); // Logging req.body
    CustomerModel.create(req.body)
      .then(customer => res.json(customer))
      .catch(err => res.json(err))
  });



    app.post('/contact', (req, res) => {
        console.log('Received data:', req.body); // Logging req.body
        ContactModel.create(req.body)
          .then(feedback => res.json(feedback))
          .catch(err => res.json(err))
      });
  
app.listen(3001, () => {
    console.log("Server is running");
  });