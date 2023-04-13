import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css";


const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err , setError] = useState(null)
  const navigate= useNavigate()
  const handleChange = e => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSummit = async e =>{
   e.preventDefault()
   try {
    await axios.post("http://localhost:8080/api/regiter",input)
     navigate("/login")
   } catch (err) {
    setError(err.response.data.message)
   }
 
    
  }
  return ( 
  <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          className="inp"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          className="inp"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          className="inp"
          onChange={handleChange}
        />
        <button className="bnt" onClick={handleSummit}>Register</button>
       {err&&<p className="P2"> {err}</p>}
        <span className="spn">
          Already have an accout? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
