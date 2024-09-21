import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <>
    <h1>ErrorPage</h1>
    {error &&<p>{error.data}</p>}
    <NavLink to="/">
    <button>Go Home</button>
    </NavLink>
    </>
    
  )
}

export default ErrorPage