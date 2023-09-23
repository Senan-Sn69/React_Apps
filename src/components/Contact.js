import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">GET IN TOUCH</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  )
}

export default Contact