import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import AuthRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect("mongodb+srv://ankith:ankithahms2004@realestate.eryp6k2.mongodb.net/?appName=realestate").then(()=>{
    console.log("Connected to Mongodb.....!")
}).catch((err)=>{
    console.log(err);
})

const app=express();

app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/auth",AuthRouter);


app.listen(3000,()=>{
    console.log(`Server is running on port 3000.....!`);
})