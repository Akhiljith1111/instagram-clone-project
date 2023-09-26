
import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/HomeOutlined';
// import AddHomeIcon from '@mui/icons-material/AddHome';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


function Sidenav() {
  return (
    <div className="sidenav">
        <img className="sidenav__logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Logo.wine.svg" 
        alt="instagram" 
        />
         <div className="sidenav__buttons">
             <button className="sidenav__button">
               <HomeIcon />
               {/* <AddHomeIcon /> */}
                <span>Home</span>
             </button>

             <button className="sidenav__button">
               <SearchIcon />
                <span>Search</span>
             </button>

             <button className="sidenav__button">
               <ExploreOutlinedIcon />
                <span>Explore</span>
             </button>

             <button className="sidenav__button">
               <SlideshowOutlinedIcon />
                <span>Reels</span>
             </button>

             <button className="sidenav__button">
               <ChatBubbleOutlineOutlinedIcon />
                <span>Messages</span>
             </button>

             <button className="sidenav__button">
               <FavoriteBorderOutlinedIcon />
                <span>Notifications</span>
             </button>

             <button className="sidenav__button">
               <AddCircleOutlineOutlinedIcon />
                <span>Create</span> 
             </button>

         </div>
         <div className="sidenav__more">
         <button className="sidenav__button">
               <MenuOutlinedIcon />
                <span>More</span>
             </button>
             </div>
         </div>
  )
}

export default Sidenav;
