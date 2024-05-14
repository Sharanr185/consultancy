 const mongoose=require('mongoose');
 const ContactSchema = new mongoose.Schema({
    email: String,
    feedback: String,
  });
  
  const ContactModel = mongoose.model('feedback', ContactSchema);
  module.exports=ContactModel;