const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>welcome to our homepage</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>Thanks for learning about us</h1>")
})

app.listen(2000,(req,res)=>{
    console.log("Server is running")
});