const express=require('express');
const Subscriber = require("../models/subscriber");
const router=express.Router();

// getting all
router.get("/",async(req, res)=>{
    try{
        const subscribers=await Subscriber.find();
        res.json(subscribers);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// getting one
router.get("/:id",getSubscriber,(req, res)=>{
    res.json(res.subscriber);
})

// creating one
router.post("/",async(req, res)=>{
    const subscriber=new Subscriber({
        name:req.body.name,
        subscribedToChannel:req.body.subscribedToChannel
    })
    try{
        const newSubscriber=await subscriber.save();
        res.status(201).json(newSubscriber);
    }
    catch(err){
        res.send(400).json({message: err.message});
    }
})

// Update one
router.patch("/:id",getSubscriber,async(req, res)=>{
    if(req.body.name!=NULL){
        res.subscriber.name = req.body.name;
    }
    if(req.body.subscribeToChannel!=NULL){
        res.subscriber.subscribedToChannel(req.body.subscribedToChannel);
    }
    try {
        const updatedSubscriber=await res.subscriber.save();
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message});
    }

})

// Delete one
router.delete("/:id",getSubscriber,async(req,res)=>{
    // try {
    //     const deleteSubscriber=await res.subscriber.remove();
    //     res.json({message: "Subscriber removed"});
    // } catch (err) {
    //     res.send(500).json({message: err.message});
    // }
    try {
        const deleteSubscriber = await User.findByIdAndDelete(req.params.id);
        if (!deleteSubscriber) throw new Error('User not found');
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
})

// middleware function
async function getSubscriber(req,res,next){
    let subscriber;
    try{
        subscriber=await Subscriber.findById(req.params.id)
        if(subscriber==NULL){
            return res.status(404).json({message:"subscriber not found"})
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.subscriber = subscriber;
    next();
}

module.exports =router; 