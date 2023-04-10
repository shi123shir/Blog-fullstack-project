const express = require("express")
const route = express.Router()
const  {register, login}= require("../controller/userController")

route.post("/regiter", register)
route.post ("/login", login)











module.exports= route