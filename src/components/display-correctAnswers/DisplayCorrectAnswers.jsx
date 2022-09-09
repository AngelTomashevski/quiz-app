import React, { useEffect, useState } from 'react'
import classes from "./DisplayCorrectAnswers.module.css"
import { useSelector } from 'react-redux'



const DisplayCorrectAnswers = () => {
    const [isBumping,setIsBumping] = useState(false)
    const {numOfCorrectAnswers,index} = useSelector(state=>state.quiz)

    useEffect(()=>{
        if(numOfCorrectAnswers > 0) {
            setIsBumping(true)
        }

      const intervalId = setTimeout(()=>{
            setIsBumping(false)
        },200)

        return ()=>{
            clearTimeout(intervalId)
        }
    },[numOfCorrectAnswers])

     const correct= `${classes.correct}${isBumping ? classes.bump : ""}`

  return (
    <div className={classes["correct-answers"]}>
          Correct Answers:{" "}
          <span className={correct}>{numOfCorrectAnswers}</span> /{" "}
          <span className={classes.incorrect}>{index}</span>
        </div>
  )
}

export default DisplayCorrectAnswers