const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const path = require ("path");
const cors=require("cors");
const multer = require("multer");
const { error } = require("console");
const {Schema}=mongoose;

require('dotenv').config()

app.use(express.json());
app.use(cors());

Port=4000;

mongoose.connect("mongodb+srv://rathoreb881:9411164507@cluster0.dh2yjck.mongodb.net/eshop")

app.get("/",(req,res)=>{
      res.send("express app is running")
})

const productSchema = mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:String,
        require:true,
    },
    old_price:{
        type:String,
        require:true
    }
})

const Product=mongoose.model('eshop',productSchema)

app.post("/addproduct",async(req,res)=>{
    const product = Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
     })
     console.log(product)
     await product.save();
     console.log("saved")
     res.status(400).send("Ok")
})

app.post("/removeproduct",async (req,res)=>{
   if(Product.findOneAndDelete({id:req.body.id})){
    res.json({
        success:true,
        name:req.body.name
    })}
   else{
    res.json.send('error',error)
   }
})

app.get("/allproducts",async (req,res)=>{
    let products= await Product.find({});
    console.log(products)
    res.send(products)
})


app.listen(Port,(error)=>{
    if(!error){
        console.log(`connection successsful at ${Port}`)
    }else{
        console.log("error:",error)
    }

})

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:function(req,file,cb){
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
 
const upload =multer({storage:storage})

app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res,next)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${Port}/images/${req.file.filename}`
    })
})