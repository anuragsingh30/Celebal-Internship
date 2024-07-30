require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/AlianDb'
const app = express();
const port = 3000;

// mongoose.connect(url,{useNewUrlParser: true});
// const con=mongoose.connection ;

mongoose.connect(process.env.DATABASE_URL, {
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


// con.on('open', function(){
//     console.log('Connected');
// })

app.use(express.json());

const alianRouter=require('./routes/alians'); 
app.use("/alians", alianRouter);

app.listen(port,function(){
    console.log('server Connected on port '+port);
})