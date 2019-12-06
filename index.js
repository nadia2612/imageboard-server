const express =require("express")
const cors=require("cors")
const db = require("./db")
const bodyParser=require("body-parser")
const app = express()
const Image= require("./image/model")
const imageRouter=require("./image/router")
const port = process.env.PORT || 4000


const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)
app.listen(port,()=>console.log(`listening ${port}`))
