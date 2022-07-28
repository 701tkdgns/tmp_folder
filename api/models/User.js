const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:Stirng,
        required:true,
        unique:true
    },
    email:{
        type:Stirng,
        required:true,
        unique:true
    },
    password:{
        type:Stirng,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});

export default mongoose.model("User", UserSchema);