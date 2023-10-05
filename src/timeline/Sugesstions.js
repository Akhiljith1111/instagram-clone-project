

import React, { useState } from 'react';
import "./Sugesstions.css";
import { Avatar } from '@mui/material';
import Sugessfooter from './Sugessfooter';

function SuggestionItem({ username, relation }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className='suggestion__name'>
      <div className='username__left'>
        <span className='avatar'>
          <Avatar>{username.charAt(0)}</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>{username}</span>
          <span className='relation'>{relation}</span>
        </div>
      </div>
      <button
        className={`follow__button ${isFollowing ? 'following' : ''}`}
        onClick={handleFollowToggle}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

function Sugesstions() {
  return (
    <div style={{marginTop:"40px"}}>
    <div className='sugesstions'>
      <div className='suggestion__name'>
           <div className='username__left'>
             <span className='avatar'>
               <Avatar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmoqbEfSr-jWsiR2xsYK1HXZplgb1tGpikQ&usqp=CAU" className='avatar__img' alt='user-avatar' />
               </Avatar>
             </span>
             <div className='username__info'>
               <span className='username'>Harry__Porter</span>
               <span className='relation'>Harry</span>
             </div>
           </div>
           <button className='follow__button'>Switch</button>
         </div>

      <div className='suggestion__name'>
        <div className='suggesstion__title'>Suggested for you</div>
        <button className='see__button'>See All</button>
      </div>


      <div className='suggestion__usernames'>
        <SuggestionItem username="Alien__" relation="New to Instagram" />
        <SuggestionItem username="Men_at_Arms" relation="New to Instagram" />
        <SuggestionItem username="Oliver__Twist" relation="New to Instagram" />
      </div>

      <div>
        <Sugessfooter />
      </div>
    </div>
    </div>
  );
}

export default Sugesstions;
