const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist');
module.exports=mongoose;