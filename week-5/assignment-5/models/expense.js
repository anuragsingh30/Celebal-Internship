const mongoose=require("mongoose")
const ExpenseSchema=mongoose.Schema({
    item:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const expense=mongoose.model("Expense Tracker",ExpenseSchema)

module.exports=expense