const express = require('express');
const http = require('http');
const app= express();
const port=3000;

app.get("/", function(req, res){
    res.send("Welcome");
})
const server=http.createServer(function(req, res){
    res.writeHead('hello world');
    res.end();
})

app.listen(port,function(error){
    if(error){
        console.log("errorrrrr",error);
    }else{
        console.log("listening at "+port);
    }
})