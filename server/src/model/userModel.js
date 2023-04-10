const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    userName:{
        type: String , 
        required : true, 
    }, 
    email :{
        type: String ,
        required: true, 
        unique : true,
    },

    password:{
        type: String, 
        required: true,
    },

    img:{
        type: String
    }


},{timestamp: true})

module.exports = mongoose.model("user",userSchema)