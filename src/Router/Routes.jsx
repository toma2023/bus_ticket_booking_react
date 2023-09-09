import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Page/Home/Home";
import AllTicketsBySearch from "../Page/AllTicketsBySearch/AllTicketsBySearch";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Faqs from "../Page/Faqs/Faqs";
import Blogs from "../Page/Blogs/Blogs";
import SignUp from "../Page/Signup/SignUp";
import SignIn from "../Page/SignIn/SignIn";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [

        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/faqs",
            element: <Faqs/>
        },
        {
            path: "/blogs",
            element: <Blogs/>
        },
        {
            path: "/signUp",
            element: <SignUp/>
        },
        {
            path: "/signin",
            element: <SignIn/>
        },
        {
            path: "/bus/search",
            element: <AllTicketsBySearch/>
        }
      ]
    },
  ]);