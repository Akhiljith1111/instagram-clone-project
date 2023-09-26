import React, { useState } from 'react'
import "./Timeline.css" 
import Sugesstions from './Sugesstions'
import Post from './Post/Post'


function Timeline() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user : "Vysakh",
      postImage: "https://media.licdn.com/dms/image/C5103AQEKh1ro-iizew/profile-displayphoto-shrink_800_800/0/1557814686434?e=2147483647&v=beta&t=81KPrl41FwO5bwFbafZrOu0BOpA2PYY6_UDym_-Kd8o",
      likes: 100000,
      timestamp: "12h",
    },
    {
      id: 2,
      user : "John__wick",
      postImage: "https://storage.googleapis.com/pai-images/5e08db8fdd0d453bbffedfe036756d2e.jpeg",
      likes: 59,
      timestamp: "2d",
    },
    {
      id: 3,
      user : "Hitler__",
      postImage: "https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200305/195508778-2d-factory-in-pixel-art-style-high-quality-photo.jpg",
      likes: 123,
      timestamp: "1w",
    },
    {
      id: 4,
      user : "Robert__",
      postImage: "https://www.cnet.com/a/img/resize/bbfeb09b27766c41919bb9a6d2ff100bad860fd8/hub/2021/09/30/49c7703f-014d-442b-98d5-3568bccf4d5f/air-promo.jpg?auto=webp&fit=crop&height=675&width=1200",
      likes: 203,
      timestamp: "1w",
    },
    {
      id: 5,
      user : "ANTONY__",
      postImage: "https://us.123rf.com/450wm/ibrester/ibrester2007/ibrester200705342/150898062-los-angeles-california-usa-2019-orange-mini-bus-surfers-on-venice-beach.jpg?ver=6",
      likes: 306,
      timestamp: "1w",
    },
  ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map(post => (
              <Post 
              user={post.user} 
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp} 
              />
            ))}
          </div>
        </div>
        <div className="timeline__right">
            <Sugesstions />
        </div>
    </div>
  )
}

export default Timeline