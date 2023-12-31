import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../Assets/Logo.svg";


const Navbar = () => {
    
  return (
    <BrowserRouter>
    <nav>
      <div className="nav-logo-container">
      </div>
      <div className="image-logo-container">
          <img src={Logo} alt="" />
        </div>
      <div className="navbar-links-container">
        <Link smooth to='#home'>Home</Link>
        <Link smooth to='#about'>About</Link>
        <Link smooth to='#why'>Why</Link>
        <Link smooth to='#benefits'>Benefits</Link>
        <Link smooth to='#how'>How it Works</Link>
        <Link smooth to='#technology'>Technology</Link>
        <Link smooth to='#blog'>Blog</Link>
        <Link smooth to='#contact'>Contact</Link>
      </div>
      </nav>
      </BrowserRouter>
  )
}

export default Navbar