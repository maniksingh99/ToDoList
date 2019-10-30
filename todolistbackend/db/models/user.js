const mongoose=require('../models/connection');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
    'username':{type:String,required:true},
    'userid':{type:String,required:true,unique:true},
    'email':{type:String,required:true,unique:true,minlength:3},
    'password':{type:String,required:true}
})
var UserCollection=mongoose.model('users',UserSchema);
module.exports=UserCollection;
