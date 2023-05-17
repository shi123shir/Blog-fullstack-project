import React, {useEffect, useState} from 'react'
import "./style.css"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [posts,setPosts] = useState([])

  const cat = useLocation().search
  console.log(cat)

useEffect(()=>{

  const fetchData = async ()=> {
    try{
      const res =  await axios.get(`http://localhost:8080/api/blog?${cat}`)
      
      setPosts(res.data.data)
    }catch(err){
      console.log(err)
    }
   
  }
  fetchData()
},[cat])

const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div  className="home">
      <div className='posts'>
        {
          posts.map((post) => (
            
            <div className='post' key={post._id}>
              <div className='img'> 
              <img  calssName="im" src={post.Image} alt="" />
              </div>
             <div className='content3'>
              <Link className='link' to={`/post/${post._id}`}>
              <h1 className='H1'>
                {post.title}
              </h1>
              </Link>
              <p className='P1'>{getText(post.desc)}</p>
              <button className='bt1'>Read More</button>
               </div>
            </div>
          )
            )
          }
      </div>
    </div>
  )
}

export default Home