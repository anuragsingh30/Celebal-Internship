require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const expense=require("./models/expense");
const port=8080;
const app=express();
app.use(express.json())

try{
    mongoose.connect(process.env.DATABASE_URL);
    console.log("DB connected");
}
catch (err){
    console.log("DB error",err)
}


app.get("/",async function(req,res){
    const expenses=await expense.find();
    res.send(expenses)
    console.log(expenses)
})

app.post("/",async function(req,res){
    const item=req.body.item;
    const price=req.body.price;
    const newExpense=new expense({
        item:item,
        price:price
    }) 
    await newExpense.save()
    res.send(newExpense)
})

app.delete("/",async function(req,res){
    const id=req.body.id;
    const deleteId=await expense.deleteOne({_id:id})
    res.send("delete Successful"+deleteId)
})

app.put("/",async function(req,res){
    const id=req.body.id;
    const item=req.body.item;
    const price=req.body.price;
    const updatedOne=await expense.findOneAndUpdate({
    _id:id
    },{
        item:item,
        price:price
    })
    
    res.send(updatedOne)
})

function Isconnected(){
    console.log("server started")

}

app.listen(port,Isconnected)