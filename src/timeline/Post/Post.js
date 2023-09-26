import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({user, postImage, likes, timestamp, id}) {

  // const [posts,setPosts] = useState([])

  // const handleLike = (Id) => {
  //   const updatedPosts = posts.map((post) => {
  //     if (post.id === Id) {
  //       return { ...post, likes: {likes} + 1 }; // Increment the like count
  //     }
  //     return post;
  //   });
  //   setPosts(updatedPosts);
  // };


  return (
    <div className='post'>
      <div className="post__header">
        <div className="post__headerName">
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar> {user}• <span>{timestamp}</span>
        </div>
        <MoreHorizIcon className='post__more'/>
      </div>
      <div className="post__image">
      <img src={postImage} 
      alt='Feed_image' />
      </div>

      <div className="post__footer">
        <div className='post__footerIcons'>
          <div className='post__mainIcons'>
            <FavoriteBorderIcon className='postIcon'/>
            <ChatBubbleOutlineIcon className='postIcon'/>
            <TelegramIcon className='postIcon'/>
          </div>
          <div className='post__saveIcon'>
            <BookmarkBorderIcon className='postIcon' />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  )
}

export default Post





