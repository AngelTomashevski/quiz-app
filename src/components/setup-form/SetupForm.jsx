import React from 'react'
import Button from '../UI/button/Button'
import classes from "./SetupForm.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { handleChange } from '../../feature/setupFormSlice'
import { useNavigate } from 'react-router-dom'
import getQuestions from '../../feature/quizThunk'
import { theme } from '../../feature/quizThunk' 
import Logo from "../../assets/download-trivia.png"
import SelectInput from '../UI/input/SelectInput'
import Input from '../UI/input/Input'



const SetupForm = () => {
const {error} = useSelector(state=> state.quiz)
const {quizOptions} = useSelector(state=>state.form)
const dispatch = useDispatch();
const navigate= useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
   const {limit,difficulty,category} = quizOptions;
  const url = `https://the-trivia-api.com/api/questions?categories=${theme[category]}&limit=${limit}&difficulty=${difficulty}`;
   
    dispatch(getQuestions(url))

    if(error) {
      navigate("*")
      return;
    }
    navigate("/answers")
  
}

  return (
    <main >
      <section className={[classes.quiz, classes["quiz-small"]].join(" ")}>
        <form className={classes["setup-form"]}>
          <h2 className={classes.text}>QUIZ by <span className={classes["logo-img"]}><img src={Logo} alt="Logo-quiz" /></span></h2>
           {error && (
                  <p className={classes.error}>
                    Can't generate questions, something went wrong! Please try again!
                  </p>
                )}
            
          <div className={classes["form-control"]}> 
           {/* limit */}
           <Input id="limit" type="number" labelText="Number of Questions (1-20)" className={classes["form-input"]} inputValue={quizOptions.limit} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} min={1} max={20}/>

           {quizOptions.limit <= 0 || quizOptions.limit > 20 ? <p className={classes.error}>Please enter a number between 1 and 20 </p> : null}
        
          {/* category */}
          <SelectInput id="category" labelText="Select Category" className={classes["form-input"]} inputValue={quizOptions.category} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} optionValueOne="sports and leisure" optionValueTwo="history" optionValueThree="geography" optionValueFour="film and tv" optionValueFive="music"/>
          
          {/* difficulty */}
          <SelectInput id="difficulty" labelText="Select Difficulty" className={classes["form-input"]} inputValue={quizOptions.difficulty} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} optionValueOne="easy" optionValueTwo="medium" optionValueThree="hard"/>
           </div>
         {quizOptions.limit > 0 && quizOptions.limit <=20 && <Button type='submit' onClick={handleSubmit} className={classes["submit-btn"]}>
            Start
          </Button> }
        </form>
     
      </section>

     
    </main>
  )

  }

  export default SetupForm