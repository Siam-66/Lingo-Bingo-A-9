import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Pages/Home';
import Root from './Component/Root';
import StartLearning from './Component/Pages/StartLearning';
import Tutorials from './Component/Pages/Tutorials';
import Aboutus from './Component/Pages/Aboutus';
import Login from './Component/LogSign/Login';
import Signup from './Component/LogSign/Signup';
import AuthProvider from './Provider/AuthProvider';
import JapanLesson from './Component/Japans/JapanLesson';
import ErrorPage from './Component/Pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "japans/:lesson_no",
        element: <JapanLesson></JapanLesson> ,
        loader: () => fetch('/lingoBingo.json')
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
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>

  </StrictMode>,
)
