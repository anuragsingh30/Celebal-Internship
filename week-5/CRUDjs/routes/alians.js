const express = require('express');
const router=express.Router();
const Alian = require('../models/alian');

router.get("/",async function(req,res){
    try{
        const alians=await Alian.find();
        res.json(alians);
    }
    catch(err){
        res.send("Error: " + err);
    }
})

router.post("/",async function(req,res){
    const alian=new Alian({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1=await alian.save();
        res.json(a1);
    }catch(err){
        res.send("Error: " + err);
    }
})

router.delete("")

module.exports =router;