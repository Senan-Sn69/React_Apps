import React from 'react'
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs"
import { BsPhoneFill } from "react-icons/bs"
import { BsEnvelopeAtFill } from "react-icons/bs"

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Why</span>
          <span>Benefits</span>
          <span>How it Works</span>
          <span>Technology</span>
          <span>Our Work</span>
          <span>Blog</span>
        </div>
        <div className="footer-section-columns">
        <BsFillGeoAltFill /><span>Sales and Marketing 23, Braybrooke Street, Colombo 02,Sri Lanka.</span>
        <BsPhoneFill /><span>+94 11 724 4004</span>
        <BsEnvelopeAtFill/><span>ceo@appstechnologies.lk</span>
          <span>marketing@appstechnologies.lk</span>
        </div>
      </div>
    </div>
  )
}

export default Footer