import React from "react";
import classes from "./Url.module.css";

const Url = (props) => {
  console.log("short url is" + props.shortUrl);
  return (
    <li className={classes.url}>
      <h2>{props.shortUrl}</h2>
      <h3>{props.originalUrl}</h3>
    </li>
  );
};

export default Url;
