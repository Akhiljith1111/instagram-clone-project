import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material'

function Sugesstions() {
  return (
    <div className='sugesstions'>
      <div className='suggesstion__title'>Suggested for you</div>
      <div className='suggestion__usernames'>

        <div className='suggestion__name'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>A</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Alien__</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

        </div>

        <div className='suggestion__name'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>M</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Men_at_Arms</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

        </div>

        <div className='suggestion__name'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>O</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Oliver__Twist</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>

        </div>


      </div>
    </div>
  )
}

export default Sugesstions