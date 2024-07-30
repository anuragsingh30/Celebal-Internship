const express=require('express');
const app= express();
const port=3000;
const userRoute = require('./routes/Users');

app.use('/user',userRoute);

app.listen(port,(req,res)=>{
    console.log("listening on port"+port);
})