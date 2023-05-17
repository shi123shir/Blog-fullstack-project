const express = require("express")
const route = express.Router()
const  {register, login, logout}= require("../controller/userController")
const {getblog,getblogbyId,writeblog,updateblog,deleteblog} = require("../controller/blogController")
const uploadFile = require("../aws/awsconfig")

route.post("/regiter", register)
route.post ("/login", login)
route.post ("/logout", logout)

// get router 

route.get("/blog", getblog)
route.get("/blog/:id", getblogbyId)
route.post("/blog", writeblog)
route.put("/blog/:id",updateblog)
route.delete("/blog/:id",deleteblog)

route.post('/upload',  async function (req, res) {
    try {
       
        let file = req.files
      let orginalstring = await uploadFile(file[0])
        res.status(200).json( orginalstring);
        
    } catch (err) {
        console.log(err.message)
    }
   
    
  });
  
  











module.exports= route