import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_HOST);
        console.log("Connected to DB");
    }catch(err){
        console.log(err);
    }   
}