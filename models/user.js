const mongoose = require('mongoose');
 const userSchema = new mongoose.Schema({
    username:{ type:string , required:true, unique:true},
    email:{ type:string , required:true, unique:true},
    password:{type:string , required:true},
 });
  module.exports = mongoose.model('User',userSchema);