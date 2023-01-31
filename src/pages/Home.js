import { useState } from "react";
import UrlFetch from "../components/UrlFetch";
import UrlInput from "../components/UrlInput";


const Home = () => {
  const [webLink, setWebLink] = useState("");
  return (
    <>
      <UrlInput setWebLink={setWebLink} />
      <UrlFetch webLink={webLink} />
    </>
  )
}

export default Home;