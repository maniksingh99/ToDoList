const ToDo=require('../models/todo');
const UserCollection=require('../models/user');

const todoOperations={
    
    add(todoObject,userId,res){
        UserCollection.findById(userId,(err)=>{
            if(err){
               return res.json({"msg":"UserId not found"});
            }
        })
        ToDo.create(todoObject,(err)=>{
            if(err){
                res.send('Error While Adding ToDo');
                console.log('Error While Adding ToDo ',err);
                console.log(todoObject);
            }
            else{
                res.send('ToDo Added');
            }
        })
    },
    delete(todoId,res){
        ToDo.deleteOne({uid:todoId},(err)=>{
            if(err){
                res.send('Record does not exist');
                console.log('Record does not exist',err);
            }
            else{
                res.send('Record Deleted Successfully');
            }
        })
    },

    deleteAll(userid,res){
        ToDo.deleteMany({author:userid},(err)=>{
            if(err){
                res.send('Record does not exist');
                console.log('Record Does Not Exist ',err);
            }
            else{
                res.send('All Record Deleted Successfully');
            }
        })
    },

    update(todoId,todoObject,res){
        ToDo.updateOne({"uid":todoId},{$set:todoObject},(err)=>{
            if(err){
                res.send('Error while updating');
                console.log('Error while updating ',err);
            }
            else{
                res.send('Record updated');
            }
        })
    }
}

module.exports=todoOperations;