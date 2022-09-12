import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/button/Button'
import classes from "./Home.module.css"


const Home = () => {
    const navigate= useNavigate();

  return (
    <div className={classes.home}>
        <h1 className={classes.main}>This is a Quiz App build in Javascript library REACT</h1>
        <h3 className={classes.text}>We generate questions from <a className={classes.link} href="https://the-trivia-api.com/" target='blank'>The Trivia API</a> </h3>
        <h4 className={classes.description}>On you is to enjoy playing in diffrent categories, diffrent stage of difficulty and number of question by your choise where maximum number is 20!</h4>
        <p className={classes["copy-text"]}><a className={classes.link} href="https://the-trivia-api.com/" target='blank'>The Trivia API</a> - Free to use API for multiple choice trivia questions. Featuring procedurally generated and user generated questions.</p>

        <Button className={classes["starter-btn"]} onClick={()=> navigate("/quiz")}>Get started</Button>
        
    </div>
  )
}

export default Home