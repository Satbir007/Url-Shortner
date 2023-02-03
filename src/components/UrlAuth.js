import React from "react";
import { useEffect, useState } from "react";
import "../css/main.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import LoginContext from "../store/login-context";

const router = createBrowserRouter([
  {
    basename: "/Url-Shortner",
    path: "/Url-Shortner",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

const UrlAuth = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "21751159251-dktbh0bmdr1dt8kvb3n5co0p0dbs5iti.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, [user, setUser]);

  return (
    <LoginContext.Provider value={[user, setUser]}>
      {Object.keys(user).length === 0 && (
        <div className="title">
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <h1>Sign in to get Started !</h1>
          </motion.h1>
        </div>
      )}
      <div className="signIn">
        <div id="signInDiv"></div>
      </div>

      {Object.keys(user).length !== 0 && <RouterProvider router={router} />}
    </LoginContext.Provider>
  );
};

export default UrlAuth;
