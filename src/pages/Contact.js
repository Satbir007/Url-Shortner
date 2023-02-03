// import React from 'react'
import "../css/main.css";
import { motion } from "framer-motion";
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
    <>
      <div className="title">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.h1>
      </div>

      <form onSubmit={onSubmit}>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <label className="form-label title" htmlFor="name">
            <p>Name</p>
          </label>
          <input
            className="form-control form-input"
            placeholder="Enter you Name"
            type="text"
            id="name"
            required
          />

          <label className="form-label title" htmlFor="email">
            <p> Email</p>
          </label>
          <input
            className="form-control form-input"
            placeholder="Enter you Email"
            type="email"
            id="email"
            required
          />
          <label className="form-label title" htmlFor="message">
            <p>Message</p>
          </label>
          <textarea
            className="form-control form-input"
            id="message"
            placeholder="Enter you message"
            required
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="add-btn"
            style={{ marginTop: "2rem" }}
            type="submit"
          >
            {formStatus}
          </motion.button>
        </motion.div>
      </form>
    </>
  );
};
export default Contact;
