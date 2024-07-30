const express = require("express");
const app = express();
const port=3000;

let name="anurag";
let password=1234;

app.get('/',(req,res)=>{
    res.send("here is your data");
})

app.use(middleware);

app.get('/feedPage',(req,res)=>{
    res.send("feedPage");
})

app.get('/login',(req,res)=>{
    res.send("login page");
})

app.get('/contact',(req,res)=>{
    res.send("contact page");
});



app.listen(port,(req,res)=>{
    console.log("listening on port"+port);
})

function middleware(req, res, next) {
    if(name=="anurag" && password==12345){
        next();
    }
    else{
        res.send("unauthorized");
    }
}