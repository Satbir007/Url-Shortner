import "./App.css";

import "./css/main.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Root from "./pages/Root";

const router = createBrowserRouter([
{ path: '/',
  element: <Root />,
 children:[
  { path: '/', element: <Home  />},
  { path: 'About', element: <About />},
  { path: 'Contact', element: <Contact />}
  ],
},

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
