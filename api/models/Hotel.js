const mongoose = require("mongoose");

const  HotelSchema = new mongoose.Schema({
    name:{
        type:Stirng,
        required:true
    },
    type:{
        type:Stirng,
        required:true
    },
    city:{
        type:Stirng,
        required:true
    },
    address:{
        type:Stirng,
        required:true
    },
    distance:{
        type:Stirng,
        required:true
    },
    photos:{
        type:[String]
    },
    title:{
        type:Stirng,
        required:true
    },
    desc:{
        type:Stirng,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    cheapestPrice:{
        type:Number,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model("Hotel", HotelSchema);