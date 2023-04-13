import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Home = () => {
const posts = [
  {
    id: 1,
    title :"Lorem ipsumm dolor sit amet",
    disc :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    img: "https://images.pexels.com/photos/11837301/pexels-photo-11837301.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  },
  {
    id: 2,
    title :"Lorem ipsumm dolor sit amet",
    disc :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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