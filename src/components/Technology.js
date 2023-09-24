import React from 'react'
import Python from "../Assets/python.png";
import Linux from "../Assets/linux.png";
import Java from "../Assets/java.png";
import Oracle from "../Assets/oracle.png";
import SQL from "../Assets/mysql.png";
import PHP from "../Assets/php.png";

const Technology = () => {

    const techUse = [
        {
          image: Python,
          title: "PYTHON",
        },
        {
          image: Linux,
          title: "LINUX",
        },
        {
          image: Java,
          title: "JAVA",
        },
        {
            image: Oracle,
            title: "ORACLE",
          },
          {
            image: SQL,
            title: "MYSQL",
          },
          {
            image: PHP,
            title: "PHP",
          },
      ];

  return (
    <div className="tech-section-wrapper" id='technology'>
    <div className="tech-section-top">
      <h1 className="primary-heading">TECHNOLOGIES</h1>
      <p className="primary-text">
      We understand the complexity of a constantly evolving industry and its many components. This is why we invest our best efforts to stay abreast of industry trends and demands, so that optimum solutions are afforded at any given time.
      </p>
    </div>
    <div className="work-section-bottom">
        {techUse.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Technology