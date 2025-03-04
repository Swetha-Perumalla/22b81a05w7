const express = require('express');
const app=express()
const users=require('./users1.json')
const jwt=require('jsonwebtoken')

app.use(express.json())

app.post('/login',(req,res)=>{
    const {name,password}=req.body
    const user=users.find((user)=>user.name===name)

    if(!user){
        res.status(401).json({"message":"Invalid username or password"})
    }
    if(user.password!==password){
        res.status(401).json({"message":"Invalid username or password"})
    }
    jwt.sign({user}, "secret", (err,token)=>{
        if(err){
            res.status(500).json({"message":"Server error"})
        }
        return res.status(200).json({token})
    })
})

app.get('/users',(req,res)=>{
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        return res.status(200).json({ message: 'users accessed'});
    });
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});