const express = require("express")
const mongoose = require("mongoose")
const route = require("./router/route")
const app = express()
const dotenv = require("dotenv")
dotenv.config({path:"../.env"})

app.use(express.json())


  console.log(process.env.Mongo_Url)
mongoose.connect(process.env.Mongo_Url , {
    useNewUrlParser : true
})
.then(()=> console.log("DB is connected successfully"))
.catch((err)=>console.log("its an error", err))


app.use("/app",route)

const port = process.env.PORT || 8080

app.listen(port , function(){
    console.log(`server is running on port ${port}`)
})