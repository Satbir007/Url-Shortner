import React from "react";
import "../css/main.css";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <>
      <div className="title">
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Something went wrong :(
        </motion.h1>
      </div>
      <motion.section
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <p> Kindly make sure you are going to the correct website address !</p>
      </motion.section>
    </>
  );
};

export default ErrorPage;
