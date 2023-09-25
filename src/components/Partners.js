import React, { useState } from 'react'
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image1.png";
import image3 from "../Assets/image1.png";
import image4 from "../Assets/image2.png";
import image5 from "../Assets/image2.png";
import image6 from "../Assets/image2.png";
import leftArrow from "../Assets/leftArrow.png";
import rightArrow from "../Assets/rightArrow.png";

const Partners = () => {

    const partnersData = [
        {
          image: image1,
        },
        {
          image: image2,  
        },
        {
          image : image3, 
        },
        {
          image: image4,
        },
        {
          image: image5,  
        },
        {
          image : image6, 
        }
      ];

    const [selected, setSelected] = useState(0)
    const tLength = partnersData.length;


  return (
    <div className="tech-section-wrapper">
    <div className="tech-section-top">
      <h2 className="secondary-heading">STRATEGIC PARTNERS</h2>
      <p className="primary-text">
      Bringing greater value and versatility to the table, our strategic partners are instrumentalto our efforts of building trust and confidence in what we deliver.
      </p>
    </div>
    <div className="image-container">
      <img src={partnersData[selected].image} alt="ICTA" className="center-image" />
      <img src={partnersData[selected].image} alt="ICTA" className="center-image" />
      <img src={partnersData[selected].image} alt="ICTA" className="center-image" />

      <div className="arrows">
        <img onClick={() => {
            selected === 0
            ? setSelected(tLength - 1)
            : setSelected((prev) => prev - 1);
        }} src={leftArrow} alt="" />
        <img onClick={() => {
            selected === tLength - 1
            ? setSelected(0)
            : setSelected((prev) => prev + 1);
        }} src={rightArrow} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Partners