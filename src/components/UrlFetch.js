import React, { useState, useCallback, useEffect, useContext } from "react";
import UrlsList from "./UrlsList";
import "../css/main.css";
import UrlContext from "../store/url-context";
import { motion } from "framer-motion";

const UrlFetch = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [urls, setUrls] = useContext(UrlContext);
  const [error, setError] = useState(null);
  const webLink = props.webLink;

  const fetchUrlsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${webLink}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      } else {
        const data = await response.json();
        const transformedUrls = {
          id: data.result.code,
          shortUrl: data.result.full_short_link,
          originalUrl: data.result.original_link,
        };
        setUrls((prevUrlList) => {
          return [transformedUrls, ...prevUrlList];
        });
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [webLink, setUrls]);

  useEffect(() => {
    if (props.webLink.length) {
      fetchUrlsHandler();
    }
  }, [fetchUrlsHandler, props.webLink]);

  let content = <p>Found no movies.</p>;
  console.log(urls);
  if (urls.length > 0) {
    content = <UrlsList urls={urls} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <section>{content}</section>
    </motion.div>
  );
};

export default UrlFetch;
