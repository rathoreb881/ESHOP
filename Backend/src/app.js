const express = require("express");
const app = express();
require("./db/connect")

const port = process.env.PORT||3000
app.use(express.json())
app.get("/",(req,res)=>{
    console.log("hello my world")
})

app.listen(port,()=>{
    console.log(`your connection is perfect ${port}`)
})