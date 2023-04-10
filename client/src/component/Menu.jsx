import React from 'react'

const Menu = () => {
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