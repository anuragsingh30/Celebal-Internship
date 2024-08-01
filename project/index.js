require('dotenv').config();
const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/user');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');
const orderRoutes=require('./routes/order');

const app=express();
const PORT =process.env.PORT || 3000

mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on("error",(error)=> console.error(error))
db.once("open",()=> console.log("connected to database"));

app.use(bodyParser.json());
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/orders',orderRoutes);
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; font-src 'self' http://localhost:3000");
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});
app.get('/api/users',(req,res)=>{
    res.send("sghioashgoi");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
