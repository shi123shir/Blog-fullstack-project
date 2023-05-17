
const blogModel = require("../model/blogModel")
const uploadFile = require("../aws/awsconfig")
const userModel = require("../model/userModel")

 
  async function getblog (req,res){
    try {
        let postfil = req.query.cat
        if(postfil){
            const filterblog =  await blogModel.find({ $and: [{ isDeleted: false,category: postfil }] })
            return res
            .status(200)
            .send({status:true,message:"fetch successful", data: filterblog})
        }else{
                const allblog = await blogModel.find({isdeleted:false})
                return res.status(200).send({status:true, message:"success", data: allblog})
        }
    } catch (err) {
        return res
        .status(500)
        .send({status:false,message:"server error", error: err.message})
    }
  
 }

 async function getblogbyId (req,res){
    try {
    let blogId = req.params.id 
     let  findBlog = await blogModel.find({ _id: blogId,isdeleted: false}).populate("user")
    
     
    
    
    // findBlog["userdata"]= userName
     
     if(!findBlog || findBlog.isdeleted !==false) 
     return res
     .status(400)
     .send({status:false,message:"blog not found or deleted"})
     return res
     .status(200)
     .send([{status:true, message:"fetch successfully", data : findBlog }])
    } catch (err) {
        return res
        .status(500)
        .send({status: false, message:"server error", error:err.message})
    }

 }

 async function writeblog (req, res){
    // const token = req.cookies.access_token;
    // if(!token)
    // return res.status(401).send({status:false, message:"not authentication"})

    // jwt.verify(token , "token", (err, userInfo)=>{
    //   if(err)
    //   return  res.status(403).send({status:false, message:"token is not valid"})

    // })
    try { const {title, desc,userId,cat,date , image} = req.body
  


    if(!title)
    return res
    .status(400)
    .send({status:false, message:"title must be ptagent"})

    let userdata = await userModel.findOne({_id : userId})

    if(!userdata)
    return res
    .status(404)
    .send({status:false, message:"user not found enter valid userId"})

    let obj = {}
    obj.title = title
    obj.desc = desc
    obj.userId = userId
    obj.Image = image
    obj.category = cat
    obj.date = date 
    console.log(obj)
    const data =  await blogModel.create(obj)
    return res 
    .status(201)
    .send({status:false,message:"user created Successfully", data :data})
      
    } catch (err) {
      return res
      .status(500)
      .send({status:false, message:"server error", error : err.message})
    }
  
 }


 async function updateblog (req,res){
  try {
    
    let blogId = req.params.id
    const data = req.body

   await blogModel.findOneAndUpdate({_id: blogId},{$set:{data}}, {new:true})
   return res.status(200).send({status:true,message:"user updated successfuly"})
  } catch (err) {
    return res.status(500).send({status:false,message:"server error"})
  }

 }
 async function deleteblog (req, res){

  try {
    let blogId = req.params.id

    //  authen and autho
    await blogModel.findOneAndUpdate({_id: blogId},
      {$set: {isdeleted : true}},
      {new : true}
      )
    return res.status(200).send({status: false, message:'user Deleted successful'})
  } catch (err) {
     return res.status(500).send({status:false, message:"server error", error:err.message})
  }



 }


 module.exports = {getblog,getblogbyId,writeblog,updateblog,deleteblog}