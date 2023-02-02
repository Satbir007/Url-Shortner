import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import UrlContext from "../store/url-context";

function Root() {
  const [urls, setUrls] = useState([]);
  return (
    <UrlContext.Provider value={[urls, setUrls]}>
      <MainNavigation />
      <Outlet />
    </UrlContext.Provider>
  );
}

export default Root;
