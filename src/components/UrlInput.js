import { useState } from "react";
import "../css/main.css";
import { motion } from "framer-motion";

const UrlInput = (props) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if(value === '')
    {
      alert("Input is Empty");
    }
    else{
      props.setWebLink(value);
      setValue("");
    }
    
  };
  return (
    <div className="inputCard">
      <div className="title">
        <motion.h1
         initial={{ y: -200 }}
         animate={{ y: 0 }}
         transition={{ type: "spring", duration: 0.5 }}
         whileHover={{ scale: 1.1 }}
        >URL Shortener </motion.h1>
      </div>
      <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      >
      <input
        className="url-input"
        type="text"
        placeholder="Paste a link to shorten it"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick= {handleClick}
      >
        Generate
        </motion.button> 
      </motion.div>
      
      
    </div>
  );
};

export default UrlInput;
