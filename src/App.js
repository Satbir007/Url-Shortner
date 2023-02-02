import "./App.css";
import "./css/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import jwt_decode from "jwt-decode";
import LoginContext from "./store/login-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
  //  console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    console.log("hello");
   // console.log(user);
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

  // return <RouterProvider router={router} />;

  return(
   
    <LoginContext.Provider value={[user, setUser]}>

   
    {Object.keys(user).length === 0 && (
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Sign in to get Started !
        </motion.h1>
      )}

      <div id="signInDiv"></div>
      
      {Object.keys(user).length !== 0 && (
         
        <RouterProvider router={router} />  
      )}
     </LoginContext.Provider>
  
    );
}

export default App;
