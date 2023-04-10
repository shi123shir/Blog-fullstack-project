import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input  required type="text"  placeholder='username' className='inp'/>
        <input required type="email" placeholder='email'  className='inp'/>
         <input required type="password" placeholder='password' />
        <button className='bnt'>Register</button>
        <p className='P2'>This is an error!</p>
        <span className='spn'> Already have an accout? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register