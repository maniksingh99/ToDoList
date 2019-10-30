const mongoose=require('../models/connection');
var Schema=mongoose.Schema;
var ToDoSchema=new Schema({
    'expense':{type:String,required:true},
    'desc':{type:String,required:true},
    'amt':{type:Number,required:true},
    'uid':{type:String,required:true},
    'author':{type:mongoose.Schema.Types.ObjectId,ref:"UserCollection",required:true},
    'msg':{type:String,required:true}
});

const ToDo=mongoose.model('ToDoLists',ToDoSchema);
module.exports=ToDo;
