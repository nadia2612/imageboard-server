const express =require("express")
const db = require("./db")
const app = express()
const Image= require("./image/model")
const port = process.env.PORT || 4000
app.listen(port,()=>console.log(`listening ${port}`))