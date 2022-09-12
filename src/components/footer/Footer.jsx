import React from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes["footer-text"]}>© Angel Tomashevski {(new Date().getFullYear())}</div>
    </div>
  )
}

export default Footer