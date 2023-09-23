import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/> 
        <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            INSPIRED BY THE PAST TRANSFORMING THE FUTURE
          </h1>
          <p className="primary-text">
          App Technologies is a leading player in the forefront of the software development and IT infrastructure industry in Sri Lanka, strive to create bespoke software solutions, to help you deliver your customers a better user experience. With more than 10 years of experience at hand, we have the knowledge and the expertise to cater any type of software development, big or small and aim to deliver our clients the benefits of latest IT technology for affordable rates. From Mobile Applications to e-commerce applications and cloud services to hosting, App Technologies take cares of all your IT requirements. We specialize in, software development, mobile solutions, IT infrastructure development, BPO services, hardware maintenance, training programmes, ecommerce-based services and social media marketing and offer our services to a range of clientele from small to medium businesses to large enterprises. Taking care of your software development project from defining to implementation, we work round the clock to deliver you a fast solution and never think twice to go an extra mile to make our clients 100% satisfied. With our strategic partnership with Cryptogen, a top cybersecurity firm in Sri Lanka we have now strengthened the security of all our developments than ever. Serving the local and international market, our client base includes clients from United States, Germany, Switzerland, United Kingdom, Norway, Sweden, Denmark, Finland, Italy, France, Spain, Japan, South Korea and Taiwan. With a reputation for high-quality service, we believe honesty and transparency play a huge role in long-term business success. Consider us as an extension of your in-house team ready to bring success to your company through software.
          </p>
        </div>
        <div className="work-section-top"></div>
      </div>
    </div>
  )
}

export default Home