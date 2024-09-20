import React from 'react'
import './App.css'
import createBrowserRouter, { RouterProvider } from "react-router-dom"
import {Home} from "./pages/Home"
import {Country} from './pages/Country'
import {Contact} from "./pages/Contact"

const router = createBrowserRouter([
  {
    path : "/",
    element:<Home/>
  },
  {
    path : "/country",
    element:<Country/>
  },
  {
    path : "/about",
    element:<About/>
  },
  {
    path : "/about",
    element:<Contact/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App