const express = require("express");
const mongoose =require("mongoose");
const dotnev = require("dotenv")
const app = express();
const mainRoute=require("./routes/index.js")
const port = 4000;

dotnev.config();

const connect = async()=>{
    try {
        await 
        mongoose.connect
        (process.env.MONGO_URI)
        console.log("connected to mongoDb")
    } catch (error) {
        throw error;
        
    }
}

app.use("/api" , mainRoute);



app.listen(port,()=>{
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor.`);
})