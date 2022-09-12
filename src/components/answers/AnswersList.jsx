import React from 'react'
import classes from "./AnswersList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../../feature/quizSlice';



const AnswersList = () => {
    const {questions, index} = useSelector(state=>state.quiz);
    const dispatch = useDispatch();

   
 const { question, incorrectAnswers, correctAnswer } = questions[index];

 let answers = [...incorrectAnswers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correctAnswer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correctAnswer;
  }

  // const answers = [...incorrect_answers, correct_answer];

  const correlation = (condition) => {
    dispatch(checkAnswers(condition))
  }

  return (
     <article className={classes.container}>
          <h2>{"Question " + (index + 1) + ": " + question}</h2>
          <div className={classes["btn-container"]}>
              {answers?.map((answer, index) => {
              return (
                <button
                  key={index}
                  className={classes["answer-btn"]}
                  onClick={() =>
                    correlation(correctAnswer === answer)}>
                      {(index +1)  + ") " + answer}
                      </button>
             
                 )
                }
              )
            }
          </div>

           
        </article>
  )

   
}

export default AnswersList