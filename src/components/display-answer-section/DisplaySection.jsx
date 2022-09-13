import React from 'react'
import classes from "./DisplaySection.module.css"
import AnswersList from '../answers/AnswersList'
import DisplayCorrectAnswers from '../display-correctAnswers/DisplayCorrectAnswers'
import Button from '../UI/button/Button'
import { nextQuestion } from '../../feature/quizSlice'
import { useDispatch } from 'react-redux'

const DisplaySection = () => {
    const dispatch = useDispatch()
  return (
     <section className={classes["initial-container"]}>
                <DisplayCorrectAnswers />
                <AnswersList />
                <Button
                  className={classes["next-question"]}
                  onClick={() => dispatch(nextQuestion())}
                >
                  Next Question
                </Button>
              </section>
  )
}

export default DisplaySection