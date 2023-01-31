import React, { useState, useCallback, useEffect } from "react";
import UrlsList from "./UrlsList";
import "../css/main.css";

const UrlFetch = (props) => {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const webLink = props.webLink;

  const fetchUrlsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${webLink}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // console.log(typeof data.result.code);
      // console.log(typeof data.result.full_short_link);
      // console.log(typeof data.result.original_link);
      const transformedUrls = {
        id: data.result.code,
        shortUrl: data.result.full_short_link,
        originalUrl: data.result.original_link,
      };
      // setMovies(transformedMovies);
      setUrls((prevUrlList) => {
        return [ transformedUrls, ...prevUrlList];
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [webLink]);

  useEffect(() => {
    if (props.webLink.length) {
      fetchUrlsHandler();
    }
  }, [fetchUrlsHandler, props.webLink]);

  let content = <p>Found no movies.</p>;

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
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default UrlFetch;
