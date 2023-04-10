const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")



const register = async(req,res) =>{

    try {
        let data = req.body

    const {userName, email, password} = data

    if(!userName || !email || !password)
      return  res
      .status(400)
      .send({status: false, message: "please fill the required field "})

      const checkemail = await userModel.findOne({email})

      if(checkemail)
      return res 
      .status(400)
      .send({status: false , message:"User Email is already exist"})


      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new userModel({ userName, email, password: hashedPassword });
      await user.save();
        
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
        return res.status(200).send({
          status: true,
          messgae: "login successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).send({
          status: false,
          message: "Error In Login Callcback",
          error,
        });
      }
}


// const logout = async (req,res) => {

// }
 

module.exports = {register,login}