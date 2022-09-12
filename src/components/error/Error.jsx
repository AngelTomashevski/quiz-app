import React from 'react'
import classes from "./Error.module.css"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className={classes.error}>
        <h2>404</h2>
        <p>Something went wrong</p>
        <p>Page not found!</p>
        <Link className={classes.link} to={"/"}>Back to home page</Link>
    </div>
  )
}

export default Error