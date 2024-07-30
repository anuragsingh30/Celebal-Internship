const express=require('express');
const router= express.Router();


router.get('/',(req,res)=>{
    res.send("here is your data");
})

router.post('/',(req,res)=>{
    res.send({data: "User created successfully"});
})

router.put('/',(req,res)=>{
    res.send({data: "User updated successfully"});
})

router.delete('/',(req,res)=>{
    res.send({data: "User deleted successfully"});
});


module.exports =router;