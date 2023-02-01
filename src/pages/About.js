import React from "react";
import "../css/main.css";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <div className="title">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.h1>
      </div>
      <motion.section
       initial={{ y: 1000 }}
       animate={{ y: 0 }}
       transition={{ type: "spring", duration: 1 }}
       whileHover={{ scale: 1.1 }}
      >
        <p >
          Welcome to the Url-shortner website. This website helps you to
          generate a list of URls that are easy to use and once generated you can copy them too with a single button click !
        </p>
        <p >
        This website is made with the help of React and we have tried to implement
          various concepts of React like routing, authentication, hooks, etc.
        </p>
          
          
        
      </motion.section>
    </>
  );
}

export default About;
