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
        ref:"user",
        required: true
    },
    Image: {
    type:String
    },

    category:{
    type :String
},
    Date:{
        type:Date,
        default:new Date()
    },
    isdeleted :{
      type:Boolean,
      default : false
    }

},{timestamp: true})

module.exports = mongoose.model("post",postSchema)