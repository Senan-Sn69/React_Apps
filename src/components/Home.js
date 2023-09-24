import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import Logo from "../Assets/Logo.svg";

const Home = () => {
  return (
    <div className='home-container' id='home'>
  
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            INSPIRED BY THE PAST TRANSFORMING THE FUTURE
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home