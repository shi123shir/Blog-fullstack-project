import React from 'react'
import "../Single/style.css"
import Edit from "../../component/img/edit.png"
import Delete from "../../component/img/delete.png"
import Menu from "../../component/Menu"
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content1'>
        <img src=""  alt='' />
        <div className='user'>
          <img src="" alt="" />
          <div className='info'>
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to="/write?edit=2">
            <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in laudantium nobis quas quaerat dolor velit iste tenetur sequi asperiores magni perspiciatis ducimus, temporibus odio reiciendis officia magnam eius</p>
      </div>
    <Menu />
        
    </div>
  )
}

export default Single