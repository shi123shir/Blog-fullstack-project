import React, { useContext, useState,useEffect } from 'react'
import axios from "axios";
import "../Single/style.css"
import Edit from "../../component/img/edit.png"
import Delete from "../../component/img/delete.png"
import Menu from "../../component/Menu"
import { Link , Navigate, useLocation, useNavigate} from 'react-router-dom'
import moment from "moment"
import { AuthContext } from '../../context/authContext'


const Single = () => {
  const [post,setPost] = useState([])

  const location = useLocation()
  const navgiate = useNavigate()

  const postId  = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)
  

useEffect(()=>{
  const fetchData = async ()=>{
    try{
   
      const res = await axios.get(`http://localhost:8080/api/blog/${postId}`)
    
      setPost()
    }catch(err){
      console.log(err)
    }
  
  }
    
  fetchData()
},[postId])

console.log(post)

 const handleDelete  = async () =>{
  try{
    await axios.delete(`http://localhost:8080/api/blog/${postId}`)
    navgiate("/")
  }catch(err){
    console.log(err)
  }
 }

 const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='single'>
      <div className='content1'>
        <img src={post?.Image}  alt='' />
        <div className='user'>
       { post.userImg&&<img src={post.userImg} alt="" />}
          <div className='info'>
            <span>{post}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
         {/* { currentUser.username === post.userdata.username &&
          <div className='edit'>
            <Link to={`/write?edit=2`} state={post} >
            <img src={Edit} alt="" />
            </Link>
            
            <img onClick={handleDelete}  src={Delete} alt="" />
          </div>} */}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
    <Menu cat= {post.cat} /> 
    </div>
  )
}

export default Single