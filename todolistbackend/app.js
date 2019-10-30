const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());

app.use('/',require('./controllers/user'));

app.use((res,req,next)=>{
    res.send('U type Something Wrong');
})

app.listen(process.env.PORT||5555,()=>{
    console.log('Server Start....');
})