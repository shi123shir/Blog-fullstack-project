import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Menu = ({cat}) => {
  const [posts, setPost] = useState([])

  useEffect (()=>{
 
    const fetchData = async ()=>{
      try {
        
        const res = await axios.get(`http://localhost:8080/posts/?cat=${cat}}`);
        setPost(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }


  }, [cat])
  return (
    <div className='menu'>
        <h1>other post you like</h1>
        {posts.map(post =>(
          <div className='post' key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))}
    </div>
  )
}

export default Menu