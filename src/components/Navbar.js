import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
Box,
Drawer,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


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
    <nav>
      <div className="nav-logo-container">
        
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Why</a>
        <a href="">Benefits</a>
        <a href="">How it Works</a>
        <a href="">Technology</a>
        <a href="">Our Work</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      </nav>
  )
}

export default Navbar