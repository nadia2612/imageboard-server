const express =require("express")
const app = express()
const port = process.env.PORT || 40004000
app.listen(port,()=>console.log(`listening ${port}`))