import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from './Components/Layout/AppLayout';
import { Home } from "./pages/Home";
import { Country } from './pages/Country';
import { Contact } from "./pages/Contact";
import { About } from './pages/About';
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './Components/Layout/ContryDetails'

// Define your router
const router = createBrowserRouter([
  {
    path : "/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countries",
        element: <Country />,
      },
      {
        path: "/contact", 
        element: <Contact />, 
      },
      {
        path: "/about", 
        element: <About />, 
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      }
    ],
  },
  
]);

const App = () => {
  return (
    <RouterProvider router={router} /> // Providing the router to RouterProvider
  );
}

export default App;