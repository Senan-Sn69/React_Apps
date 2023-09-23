import React from 'react'
import Globe from "../Assets/globe.png";
import Hourglass from "../Assets/hourglass.png";
import People from "../Assets/people.png";
import Phone from "../Assets/phone.png";
import Laptop from "../Assets/laptop.png";
import Cloud from "../Assets/cloud.png";

const Why = () => {
    const workInfoData = [
        {
          image: Globe,
          title: "INFRASTRUCTURE SOLUTIONS",
          text: "In designing, implementing and managing infrastructure, we align our expertise with our clients’ business goals, as we believe in creating a collaborative work ethos with each of our solutions.",
        },
        {
          image: Hourglass,
          title: "IT CONSULTANCY",
          text: "We are on hand to lend our extensive experience and knowledge to ensure you make informed decisions, taking into account each technical and business perspective. we align expertise with our clients’ business goals, as we believe in creating a collaborative work.",
        },
        {
          image: People,
          title: "ON CALL/REMOTE SUPPORT",
          text: "In designing, implementing and managing infrastructure, we align our expertise with our clients’ business goals, as we believe in creating a collaborative work ethos with each of our solutions.",
        },
        {
            image: Phone,
            title: "MOBILE APPLICATIONS",
            text: "We are Delivering native Android, iOS, and Windows apps within skilled team of expert Mobile Application Developers crafts the most sophisticated and functionally rich solutions for businesses.",
          },
          {
            image: Laptop,
            title: "WEB DEVELOPMENTS",
            text: "In designing, implementing and managing infrastructure, we align our expertise with our clients’ business goals, as we believe in creating a collaborative work ethos with each of our solutions.",
          },
          {
            image: Cloud,
            title: "WEB HOSTING & EMAIL",
            text: "In designing, implementing and managing infrastructure, we align our expertise with our clients’ business goals, as we believe in creating a collaborative work ethos with each of our solutions.",
          },
      ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">WHAT WE OFFER</h1>
        <p className="primary-text">
        We are not simply a portfolio of products and services and extend a holistic approach to every IT-related requirement.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Why