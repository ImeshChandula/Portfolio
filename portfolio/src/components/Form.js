import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <div className="form-head">
        <h3>You can contact me by filling this form.</h3>
      </div>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>E-mail</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Send</button>
        </form>
    </div>
  )
}

export default Form