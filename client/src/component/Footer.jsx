import React from 'react'
import Logo from "./img/logo.png"

const Footer = () => {
  return (
    <div className='foot'>  
      <footer >
    <img src = {Logo} alt = ""/>
    <span>
      Made with ❤️ and <b>React.js</b>.
    </span>
   </footer>
   </div>
     
  )
}

export default Footer