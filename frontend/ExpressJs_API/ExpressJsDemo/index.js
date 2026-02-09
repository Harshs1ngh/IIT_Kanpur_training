const express = require('express')
const app = express()

const HOST = 'localhost'
const PORT = 3000

// Application level Middleware
app.use((req,res,next)=>{
    console.log("Middleware 1 ....");
    next();    
})

app.use((req,res , next)=>{
    console.log("Middleware 2");
    // res.send("Middleware 2 ....")
    next()    
})

app.use('/home' ,(req,res,next)=>{
    console.log("Middleware 3");
    next()
        
})


// localhost:3000 (url='/' , method='get')
app.get("/" ,( req , res )=>{
    res.send("Welcome to my first Express Default Page....")
} )

//http://localhost:3000/home (url='/home' , method='get')
app.get('/home',(req,res)=>{
    let err =  new Error("Error Occured..")
    next(err)
    res.send("<h1 align='center'> Home Page </h1>")
})

app.get('/about',(req,res)=>{
    let r =`
        <hr color='navy' size='10' />
        <h1 align='center'> About Page </h1>
        <hr color='navy' size='10' />
    `
    res.send(r)
})

app.get('/contact',(req,res)=>
{
    // let arr = ["<hr color='navy' size='10' />" ," World" ," Bye"]
    res.send({statusCode:200,msg:'Hello...'})
})

app.get("/formData",(req,res)=>{
    let r =`
        <hr color='navy' size='10' />
        <h1 align='center'> Form Handler Page </h1>
        <hr color='navy' size='10' />
    `
    res.send(r)
})


// Error Handling Middleware
app.use((err , req, res , next)=>{

    console.log("Error Handling Middleware....");
    // next()    
})

app.listen(PORT , HOST , (err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server Running at http://${HOST}:${PORT}`);       
        
})


