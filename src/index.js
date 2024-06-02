import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()











/*
import express from "express";

const app=express();

;(async () => { //profeesional log ; laga ke iifee likhte hain
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
    
    app.on("error", (error) => {
        console.error("Express error", error);
    });

    app.listen(process.env.PORT, () => {
        console.log("Express server started at process.env.PORT");
    });
  } 
  catch (error) {
    console.error("MongoDB connection failed", error);
  }
})();
*/