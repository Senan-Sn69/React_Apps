import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id='contact'>
      <h2 className="secondary-heading">GET IN TOUCH</h2>
      <div className="contact-form-container">
        <input type="text" placeholder="Full Name" />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Email" />
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Subject" />
        <button className="secondary-button">SUBMIT</button>
      </div>
    </div>
  )
}

export default Contact