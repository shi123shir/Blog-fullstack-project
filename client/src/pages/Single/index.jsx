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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    <Menu />
        
    </div>
  )
}

export default Single