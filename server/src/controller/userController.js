const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const register = async(req,res) =>{

    try {
        let data = req.body

    const {username, email, password} = data

    if(!username || !email || !password)
      return  res
      .status(400)
      .send({status: false, message: "please fill the required field "})

      const checkemail = await userModel.findOne({email})

      if(checkemail)
      return res 
      .status(400)
      .send({status: false , message:"User Email is already exist"})


      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new userModel({ username, email, password: hashedPassword });
      await user.save();
        
      return res.status(201).send({status:true, message:"user created successfully" , data:user})
    } catch (err) {
        return res
        .status(500)
        .send({status: false,message:"server error", error : err.message})
    }

}


const login = async(req,res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
          return res.status(401).send({
            status: false,
            message: "Please provide email or password",
          });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(200).send({
            status: false,
            message: "email is not registerd",
          });
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).send({
            status: false,
            message: "Invlid username or password",
          });
        }
      
        const token = jwt.sign({
          id:user._id,
          iat: new Date().getTime(),
          exp: Math.floor(Date.now() / 1000) + 10 * 60 * 60,
        },"jwtkey")

        res.cookie("access_token",token,{
          httpOnly:true
        })
        .status(200)
        .send({status:true, message:"login successful",data: { userId: user._id, token: token }})


      } catch (error) {
        return res.status(500).send({
          status: false,
          message: "server error",
          error,
        });
      }
}


// const logout = async (req,res) => {

// }
 

module.exports = {register,login}