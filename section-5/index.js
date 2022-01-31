const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

function getWeather(req,res,next){
    req.visitorWeather = false
    if(req.visitorWeather){
        res.send("<h1>Please come back to our app when it is not raining</h1>")
    }else{
        next()
    }
}

app.get("/",getWeather,(req,res)=>{
    res.send(`
    <h1>What color is the sky on a clear day?</h1>
    <form action="/result" method ="POST">
    <input type="text" name="color">
    <button>Submit Answer</button>
    </form>
    <p>${req.visitorWeather ? "It is raining" : "It is not raining"}</p>
    `)
})


app.get("/about",(req,res)=>{
    res.send("<h1>Thanks for learning about us</h1>")
})

app.post("/result",(req,res)=>{
    if(req.body.color.trim().toUpperCase() === 'BLUE'){
        res.send("<h1>Congrats, that is correct</h1>")
    }else{
        res.send("<h1>Incorrect, please try again</h1>")
    }
   
})

app.listen(4000);