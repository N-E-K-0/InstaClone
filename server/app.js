const express = require('express')
const app = express()
const PORT = 5000

const customMiddleWare = (req,res,next) =>{
  console.log("Middle Ware executed!")
  next()
}

app.get('/',(req,res)=>{
  console.log('home')
  res.send("hello world")
})

app.get('/about',customMiddleWare,(req,res)=>{
  console.log('about')
  res.send("About page")
})

app.listen(PORT,()=>{
  console.log("server is running on", PORT)
})