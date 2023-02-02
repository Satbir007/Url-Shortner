import React from 'react';
import Url from './Url';
import classes from "../css/Url.module.css";

const UrlList = (props) => {
  return (
    <ul className={classes['urls-list']}>
      {props.urls.map((url) => (
        <Url
          key={url.id}
          shortUrl={url.shortUrl}
          originalUrl={url.originalUrl}
        />
      ))}
    </ul>
  );
};

export default UrlList;