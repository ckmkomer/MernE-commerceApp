const express = require("express");
const mongoose =require("mongoose");
const dotnev = require("dotenv")
const app = express();
const logger =require("morgan")
const mainRoute=require("./routes/index.js")
const port = 5000;

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

//middlewars
app.use(express.json());
app.use("/api" , mainRoute);
app.use(logger("dev"));




app.listen(port,()=>{
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor.`);
})