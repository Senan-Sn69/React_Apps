import React from 'react'
import Lap from "../Assets/lap.png";

const Blog = () => {

  return (
    <div className="blog-section-wrapper">
        <div className="work-section-top">
        <h1 className="primary-heading">BLOG</h1>
        </div>
      <div className="image-container">
      <img src={Lap} alt="Lap" className="center-image" />
      <img src={Lap} alt="Lap" className="center-image" />
      <img src={Lap} alt="Lap" className="center-image" />
    </div>
    </div>
  )
}

export default Blog