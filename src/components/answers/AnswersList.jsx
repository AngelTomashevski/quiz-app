import React from 'react'
import classes from "./AnswersList.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../../feature/quizSlice';



const AnswersList = () => {
    const {questions, index} = useSelector(state=>state.quiz);
    const dispatch = useDispatch();

     const { question, incorrect_answers, correct_answer } = questions[index];

  // const answers = [...incorrect_answers, correct_answer];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }


  const correlation = (condition) => {
    dispatch(checkAnswers(condition))
  }

  return (
     <article className={classes.container}>
          <h2 dangerouslySetInnerHTML={{ __html:"Question " + (index + 1) + ": " + question }} />
          <div className={classes["btn-container"]}>
              {answers.map((answer, index) => {
              return (
                 
                <button
                  key={index}
                  className={classes["answer-btn"]}
                  onClick={() =>
                    correlation(correct_answer === answer)
                   
                  }
                  dangerouslySetInnerHTML={{__html: (index +1)  + ") " + answer} } 
                  
                />
             
                 )
                }
              )
            }
          </div>

           
        </article>
  )

   
}

export default AnswersList