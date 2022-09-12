import React from 'react'
import classes from "./Header.module.css"
import logoQuiz from "../../assets/QuziApi_Logo_Dark.png"
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
const navigate = useNavigate();
  
return (
    <div className={classes.header}>
         <img src={logoQuiz} alt="quiz logo" className={classes.logo} onClick={()=> navigate("/")}/>
        <div className={classes["header-links"]}>
            <NavLink className={(navData => navData.isActive ? classes.active : classes.link)} to="/">Home</NavLink>
            <NavLink className={(navData => navData.isActive ? classes.active : classes.link)} to="/quiz">Quiz</NavLink>
            <NavLink className={(navData => navData.isActive ? classes.active : classes.link)} to="/about">About me</NavLink>
        </div>
    </div>
  )
}

export default Header