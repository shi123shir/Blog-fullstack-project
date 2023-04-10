import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Login = () => {
  return (
    <div className='auth'>
      <h1 className='H2'>Login</h1>
      <form>
        <input required type="text"  placeholder='username' className='inp'/>
        <input required type="password" placeholder='password' className='inp'/>
        <button className='bnt'>Login</button>
        <p>This is an error!</p>
        <span className='spn'> Don't you have an accout? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
