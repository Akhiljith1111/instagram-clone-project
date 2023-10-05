import React, {useState} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentBox from './Components/Commentbox';


function Post({user, postImage, likes, timestamp, id}) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setIsCommentBoxOpen(!isCommentBoxOpen);
  };

  // const handleAddComment = (postId, comment) => {
   
  // };


  return (
    
    <div className='post'>
      <div className="post__header">
        <div className="post__headerName">
        <Avatar className='avatar__post'>{user.charAt(0).toUpperCase()}</Avatar> {user}• <span>{timestamp}</span>
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
            <FavoriteIcon
             className={`postIcon ${isLiked ? 'liked' : ''}`}
              onClick={handleLikeClick}
            />
            <ChatBubbleOutlineIcon className='postIcon'   onClick={handleCommentClick}/>
            <TelegramIcon className='postIcon'/>
          </div>
          <div className='post__saveIcon'>
            <BookmarkBorderIcon className='postIcon' />
          </div>
        </div>
        <span className="like-count">{likeCount} Likes</span>
        {isCommentBoxOpen && (
        <CommentBox postId={id} />
      )}
      </div>
    </div>
  )
}

export default Post





