import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Home = () => {
const posts = [
  {
    id: 1,
    title :"Lorem ipsumm dolor sit amet",
    disc :"Lorem ipsumm dolor sit amet",
    img: "https://images.pexels.com/photos/11837301/pexels-photo-11837301.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    id: 2,
    title :"Lorem ipsumm dolor sit amet",
    disc :"Lorem ipsumm dolor sit amet",
    img: "https://images.pexels.com/photos/8182407/pexels-photo-8182407.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    id: 3,
    title :"Lorem ipsumm dolor sit amet",
    disc :"Lorem ipsumm dolor sit amet",
    img: "https://images.pexels.com/photos/4514301/pexels-photo-4514301.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  }
]
  return (
    <div  className="home">
      <div className='posts'>
        {
          posts.map((post) => (
            
            <div className='post' key={post.id}>
              <div className='img'> 
              <img  calssName="im" src={post.img} alt="" />
              </div>
             <div className='content3'>
              <Link className='link' to={`/post/${post.id}`}>
              <h1 className='H1'>
                {post.title}
              </h1>
              </Link>
              <p className='P1'>{post.disc}</p>
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