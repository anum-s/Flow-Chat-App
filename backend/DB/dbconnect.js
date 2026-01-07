import mongoose from "mongoose";
// const mongoose = require ("mongoose")

const dbconnect = async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECT) 
      console.log("DB connected successfully");
      
    } catch (error) {
        console.log("DB Connection Failed:", error.message)
    }
}


export default dbconnect
