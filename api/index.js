import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect("mongodb+srv://ankith:ankithahms2004@realestate.eryp6k2.mongodb.net/").then(()=>{
    console.log("Connected to Mongodb.....!")
}).catch((err)=>{
    console.log(err);
})

const app=express();





app.listen(3000,()=>{
    console.log(`Server is running on port 3000.....!`);
})