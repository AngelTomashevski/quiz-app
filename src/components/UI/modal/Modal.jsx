import React from 'react'
import  classes from "./Modal.module.css"
import Button from '../button/Button'
import { useSelector, useDispatch } from 'react-redux'

import { closeModal } from '../../../feature/quizSlice'


const Modal = () => {
  const { isModalOpen, numOfCorrectAnswers, questions } = useSelector(state=>state.quiz)

  const dispatch = useDispatch();


  
  return (
    <div className={`${isModalOpen ? [classes["modal-container"], classes.isOpen].join(" ") : classes["modal-container"]}`} >
      <div className={classes["modal-content"]}>
        <h2>Congratulation!</h2>
        <p>
          Your percentage of correct answers is: {((numOfCorrectAnswers / questions.length) * 100).toFixed(0)}%
        </p>
        <Button className={classes["reset-btn"]} onClick={()=>dispatch(closeModal())}>
         Play again
        </Button>
      </div>
    </div>
  )
}

export default Modal
