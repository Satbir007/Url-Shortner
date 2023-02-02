import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "../css/Url.module.css";
import { motion } from "framer-motion";

const Url = (props) => {

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <motion.div
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.95,
        transition: { type: "spring", duration: 0.1 },
      }}
      className={classes.url}
    >
      <h2>{props.shortUrl}</h2>
      <h3>{props.originalUrl}</h3>
      <CopyToClipboard text={props.shortUrl} onCopy={() => setCopied(true)}>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className={classes.copied ? "copied" : ""}
        >
          Copy
        </motion.button>
      </CopyToClipboard>
    </motion.div>
  );
};

export default Url;
