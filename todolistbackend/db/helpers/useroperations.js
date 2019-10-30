const UserCollection=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require("../../utils/jwt");

const saltRounds=10;
const userOperations={
    add(userObject,res){
        var hash=bcrypt.hashSync(userObject.password,saltRounds);
        console.log('Hash is ',hash);
        userObject.password=hash;
        UserCollection.create(userObject,(err)=>{
            if(err){
                res.send('Error During Add');
                console.log('Error during add ',err);
            }
            else{
                res.send('Record Added');
            }
        })
    },
    search(userObject,res){
        //res.set({"Content-Type":"application/json"});
        UserCollection.findOne({'userid':userObject.userid},(err,doc)=>{
            if(err){
                res.send('Something Went wrong');
                console.log('Error during user search',err);
            }
            else if(doc){
                let result=bcrypt.compareSync(userObject.password,doc.password);
                console.log('The userid and password send from  frontend ',userObject);
                console.log('Value of Result ',result);
                if(result){
                    var token=jwt.generateToken(userObject.userid);

                    res.json({"Token":token,"msg":"User Valid"});
                    //res.send('User valid');
                }
                else{
                    console.log('Value of userid and password from frontend ',userObject);
                    res.send('Invalid password');
                }
            }
            else{
                console.log('Value of userid and password from frontend ',userObject);
                res.send('Invalid Userid ');
            }
        })
    }
}

module.exports=userOperations;