
import React, {useState} from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import { Button } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


function Sidenav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sidenav">
        <img className="sidenav__logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Logo.wine.svg" 
        alt="instagram" 
        />
         <div className="sidenav__buttons">
             <button className="sidenav__button">
               <HomeIcon />
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
         <button className="sidenav__button" onClick={toggleMenu} >
               <MenuOutlinedIcon  />
                <span>More </span>
             </button>
             </div>
             {isMenuOpen && (

    <div className="menu-component">
      <div className='menu__buttons'>
        <div className='menu__first'>
      <button className='menu__button'>
        <SettingsIcon />
        <span>
          Settings
        </span>
      </button>

      <button className='menu__button'>
      <HistoryToggleOffIcon />
      <span>
      Activity
      </span>
      </button>

      <button className='menu__button'>
        <BookmarkBorderIcon />
        <span>
          Saved
        </span>
        </button>
  

      <button className='menu__button'>
        <ReportProblemIcon />
        <span>
          Report
        </span>
        </button>
        </div>

        <div className='menu__second'>
      <button className='menu__button'>
        <span>Accounts</span>
        </button>
      <button className='menu__button'>
        <span>Log out
          </span>
        </button>
      </div>
      </div>
    </div>
  )}
         </div>

  )
}

export default Sidenav;





// import React, { useState } from 'react';
// import styled from 'styled-components';
// import HomeIcon from '@mui/icons-material/HomeOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
// import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ReportProblemIcon from '@mui/icons-material/ReportProblem';


// const SidenavWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #262626;
//   color: white;
//   width: 250px;
//   position: fixed;
//   height: 100%;
// `;

// const Logo = styled.img`
//   width: 120px;
//   margin: 25px;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 10px 20px;
//   color: white;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.128);
//   }
// `;

// const MoreButton = styled(Button)`
//   position: fixed;
//   bottom: 10px;
// `;

// const MenuComponent = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 250px;
//   background-color: #262626;
//   padding: 10px;
//   display: ${(props) => (props.open ? 'block' : 'none')};
// `;

// // Sidenav component
// function Sidenav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <SidenavWrapper>
//       <Logo
//         src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Logo.wine.svg"
//         alt="instagram"
//       />
//       <Button>
//         <HomeIcon />
//         <span>Home</span>
//       </Button>
//       <Button>
//         <SearchIcon />
//         <span>Search</span>
//       </Button>
//       <Button>
//         <ExploreOutlinedIcon />
//         <span>Explore</span>
//       </Button>
//       <Button>
//         <SlideshowOutlinedIcon />
//         <span>Reels</span>
//       </Button>
//       <Button>
//         <ChatBubbleOutlineOutlinedIcon />
//         <span>Messages</span>
//       </Button>
//       <Button>
//         <FavoriteBorderOutlinedIcon />
//         <span>Notifications</span>
//       </Button>
//       <Button>
//         <AddCircleOutlineOutlinedIcon />
//         <span>Create</span>
//       </Button>
//       <MoreButton onClick={toggleMenu}>
//         <MenuOutlinedIcon />
//         <span>More</span>
//       </MoreButton>
//       <MenuComponent open={isMenuOpen}>
//         <Button>
//           <SettingsIcon />
//           <span>Settings</span>
//         </Button>
//         <Button>
//           <HistoryToggleOffIcon />
//           <span>Activity</span>
//         </Button>
//         <Button>
//           <BookmarkBorderIcon />
//           <span>Saved</span>
//         </Button>
//         <Button>
//           <ReportProblemIcon />
//           <span>Report</span>
//         </Button>
//         <Button>
//           <span>Accounts</span>
//         </Button>
//         <Button>
//           <span>Log out</span>
//         </Button>
//       </MenuComponent>
//     </SidenavWrapper>
//   );
// }

// export default Sidenav;

