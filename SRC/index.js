const express=require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const templatePath=path.join(__dirname,"../templates")
app.set("view engine", "hbs")
app.set("views",templatePath)// ab ham ye bata rahe iske through k jo views folder tha uske badle ye hai
app.get("/",(req,res)=>{
    res.render("index",{name:" hi arif", age:100})
})
app.get("/contact",(req,res)=>{
    res.render("contact",{name:"ariiif"})
})
app.listen(50000,()=>console.log("listening at 50000"))