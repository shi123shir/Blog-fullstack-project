import {React,useState,} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./style.css"
import axios from 'axios'

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [err , setError] = useState(null)
  const navigate = useNavigate()
  const handleChange = e => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSummit = async e =>{
   e.preventDefault()
   try {
    await axios.post("http://localhost:8080/api/login",input)
     navigate("/")
   } catch (err) {
    setError(err.response.data.message)
   }
 
    
  }
  return (
    <div className='auth'>
      <h1 className='H2'>Login</h1>
      <form>
        <input required type="text"  placeholder='email' className='inp' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' className='inp' name="password" onChange={handleChange}/>
        <button className='bnt' onClick={handleSummit}>Login</button>
         {err&&<p>{err}</p>} 
        <span className='spn'> Don't you have an accout? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
