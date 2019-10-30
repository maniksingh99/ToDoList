const express=require('express');
const route=express.Router();
const ToDo=require('../db/models/todo');
const UserCollection=require('../db/models/user')
const jwtmiddle=require('../utils/jwtmiddleware');

route.post('/todo/add',(req,res)=>{
    var userId=req.body.author;//mongo generated id
    var todoObject=req.body;
    const todoOperations=require('../db/helpers/todooperations');
    todoOperations.add(todoObject,userId,res);
})

route.get('/todo/data/:author',(req,res)=>{
    var userId=req.params.author;//here the userid is the unique id generated by mongoose of user
    // UserCollection.findById(userId,(err)=>{
    //     if(err){
    //         return res.json({"msg":"User Not Found"});
    //     }
    // })
    ToDo.find({author:userId},(err,data)=>{
        if(err){
            
            res.send('Error While Fetching Data');
            console.log('Error while fetching data ',err);
        }
        else{
            res.json(data);
        }
    })
})

route.delete('/todo/:uid',(req,res)=>{
    var todoId=req.params.uid;
    const todoOperations=require('../db/helpers/todooperations');
    todoOperations.delete(todoId,res);
})

route.delete('/todo/clear/:userid',(req,res)=>{
    var userid=req.params.userid;
    const todoOperations=require('../db/helpers/todooperations');
    todoOperations.deleteAll(userid,res);
})

route.post('/todo/update/:uid',(req,res)=>{
    var todoId=req.params.uid;
    var todoObject={
        expense:req.body.expense,
        desc:req.body.desc,
        amt:req.body.amt,
        msg:req.body.msg
    }
    const todoOperations=require('../db/helpers/todooperations');
    todoOperations.update(todoId,todoObject,res);
})

route.post('/register',(req,res)=>{
    var userObject=req.body;
    const userOperations=require('../db/helpers/useroperations');
    userOperations.add(userObject,res);
})

route.post('/doLogin',(req,res)=>{
    var userObject=req.body;
    const userOperations=require('../db/helpers/useroperations');
    userOperations.search(userObject,res);
})

route.get('/user/find/:userid',(req,res)=>{
    var userid=req.params.userid;
    UserCollection.findOne({userid:userid},(err,data)=>{
        if(err){
            console.log('Error in finding user');
            res.send('User not fetched');
        }
        else{
            res.send(data);
        }
    })
})

module.exports=route;