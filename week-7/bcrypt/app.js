const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
app.use(express.json());
const port=8080;
const users = [];
app.post('/signup',async function(req, res){
    const {username,password} = req.body;
    const hash=await bcrypt.hash(password,13);
    users.push({
        username,
        password:hash
    })
    console.log('users');
    res.send('ok');
})

app.post('/login',async (req, res) => {
    const {username,password} = req.body;
    const user=await users.find(u=>u.username===username);
    if(!user){
        res.send('wrong username');
        return;
    }
    const isValid=await bcrypt.compare(password,user.password);
    if(!isValid){
        res.send('invalid password');
        return;
    }

    res.send('ok');
})

app.listen(port,(req, res)=>{
    console.log('listening on port'+port);
});