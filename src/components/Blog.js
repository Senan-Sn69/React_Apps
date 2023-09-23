import React from 'react'
import Lap from "../Assets/lap.png";
import City from "../Assets/city.png";
import Cat from "../Assets/cat.png";

const Blog = () => {

  return (
    <div className="blog-section-wrapper">
        <div className="work-section-top">
        <h1 className="primary-heading">BLOG</h1>
        </div>
        <div className="image-container">
      <img src={Lap} alt="Image 1" className="center-image" />
      <img src={Lap} alt="Image 2" className="center-image" />
      <img src={Lap} alt="Image 3" className="center-image" />
    </div>
    </div>
  )
}

export default Blog