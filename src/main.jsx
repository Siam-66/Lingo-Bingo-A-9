import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Root from './Component/Root';
import StartLearning from './Component/StartLearning';
import Tutorials from './Component/Tutorials';
import Aboutus from './Component/Aboutus';
import Login from './Component/Login';
import Signup from './Component/Signup';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "startLearning",
        element: <StartLearning></StartLearning> ,
      },
      {
        path: "tutorials",
        element: <Tutorials></Tutorials> ,
      },
      {
        path: "aboutus",
        element: <Aboutus></Aboutus> ,
      },
      {
        path: "login",
        element: <Login></Login> ,
      },
      {
        path: "signup",
        element: <Signup></Signup> ,
      },

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
