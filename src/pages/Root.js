import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import AuthContext from "../store/auth-context";

function Root() {
  const [urls, setUrls] = useState([]);
 // console.log(urls);
  return (
    <AuthContext.Provider value={[urls, setUrls]}>
      <MainNavigation />
      <Outlet />
    </AuthContext.Provider>
  );
}

export default Root;
