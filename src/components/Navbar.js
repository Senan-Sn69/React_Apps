import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const navOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Why",
      icon: <CommentRoundedIcon />,
    },
    {
        text: "Benefits",
        icon: <CommentRoundedIcon />,
    },
    {
        text: "How it Works",
        icon: <CommentRoundedIcon />,
    },
    {
        text: "Technology",
        icon: <PhoneRoundedIcon />,
    },
    {
        text: "Our Work",
        icon: <CommentRoundedIcon />,
    },
    {
        text: "Blog",
        icon: <PhoneRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <BrowserRouter>
    <nav>
      <div className="nav-logo-container">
        
      </div>
      <div className="navbar-links-container">
        <Link to='#home'>Home</Link>
        <Link to='#about'>About</Link>
        <Link to='#why'>Why</Link>
        <Link to='#benefits'>Benefits</Link>
        <Link to='#how'>How it Works</Link>
        <Link to='#technology'>Technology</Link>
        <Link to='#blog'>Blog</Link>
        <Link to='#contact'>Contact</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      </nav>
      </BrowserRouter>
  )
}

export default Navbar