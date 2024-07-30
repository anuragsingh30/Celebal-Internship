const express=require("express");
const app = express();
const port=3000;
const userRoute = require("./routes/user");

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  });
  
app.use("/", userRoute);

app.listen(port,(req,res)=>{
    console.log("listening on port"+port);
})