// import React from 'react'
import "../css/main.css";

import React from "react";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div
      className="container"
      style={{
        margin: "1rem auto",
        width: "50%",
        maxWidth: "35rem",
        padding: "1rem",
        borderRadius: "12px",
      }}
    >
      <h2 className="mb-3 title">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label title" htmlFor="name">
            Name
          </label>
          <input
            className="form-control url-input"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label title" htmlFor="email">
            Email
          </label>
          <input
            className="form-control url-input"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label title" htmlFor="message">
            Message
          </label>
          <textarea className="form-control url-input" id="message" required />
        </div>
        <button className=" add-btn" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;

// function Contact() {
//   return (
//     <div className='title'><h2>Contact Us</h2></div>
//   )
// }

// export default Contact
