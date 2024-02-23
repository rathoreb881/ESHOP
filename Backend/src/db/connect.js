const mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/logindb",{
    
}).then(()=>{
    console.log("connected successful")
}).catch((e)=>{
    console.log("noconnection")
})
