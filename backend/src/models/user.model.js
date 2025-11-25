import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true,
        // default:"https://cdn.discordapp.com/attachments/1028177822011217152/1100101278683883626/unknown.png"
        default:function(){
            return getGravatarUrl(this.email);
        }
    }
  
});
export default mongoose.model("user",userSchema);
