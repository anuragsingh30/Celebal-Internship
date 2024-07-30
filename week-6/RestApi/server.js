require('dotenv').config(); 
const express=require('express');
const app = express();
const port=8000;
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on("error",(error)=> console.error(error))
db.once("open",()=> console.log("connected to database"));

app.use(express.json());

const subscribersRoute=require("./routes/subscribers");
app.use("/subscribers",subscribersRoute);




app.listen(port,()=>{
    console.log('Server started and listening on port '+port);
});