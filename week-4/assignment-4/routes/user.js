const express = require("express");
const router=express.Router();

router.get("/", (req, res) => {
    res.send("user route");
})

router.get("/user2", (req, res) => {
    res.send("user2 route");
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

module.exports=router;