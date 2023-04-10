const mongoose = require("mongoose")

const objectId = mongoose.Schema.Types.ObjectId
const postSchema = mongoose.Schema({
    
    title:{
        type: String,
        requried: true
    },
    desc:{
        type:String,
        required: true
    }, 
    userId: {
        type:objectId,
        required: true
    },
    Image: {
    type:String
    },

    Date:{
        type:Date,
        default:new Date()
    }

},{timestamp: true})

module.exports = mongoose.model("post",postSchema)