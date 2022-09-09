import React from 'react'
import Button from '../UI/button/Button'
import classes from "./SetupForm.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { handleChange } from '../../feature/setupFormSlice'
import getQuestions from '../../feature/quizThunk'
import { theme } from '../../feature/quizThunk' 
import Logo from "../../assets/download.png"
import SelectInput from '../UI/input/SelectInput'
import Input from '../UI/input/Input'



const SetupForm = () => {
const { error} = useSelector(state=> state.quiz)
const {quizOptions} = useSelector(state=>state.form)
const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
const {amount,difficulty,category} = quizOptions;
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${theme[category]}&difficulty=${difficulty}&type=multiple`;
  dispatch(getQuestions(url))
}

  return (
    <main>
      <section className={[classes.quiz, classes["quiz-small"]].join(" ")}>
        <form className={classes["setup-form"]}>
          <h2>QUIZ by <span className={classes["logo-img"]}><img src={Logo} alt="Logo" /></span></h2>
         
            {error && (
            <p className={classes.error}>
              Can't generate questions, please try different options
            </p>
          )}
          <div className={classes["form-control"]}> 
           {/* amount */}
           <Input id="amount" type="number" labelText="Number of Questions (1-50)" className={classes["form-input"]} inputValue={quizOptions.amount} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} min={1} max={50}/>

           {quizOptions.amount <= 0 || quizOptions.amount > 50 ? <p className={classes.error}>Please enter a number between 1 and 50 </p> : null}
        
          {/* category */}
          <SelectInput id="category" labelText="Select Category" className={classes["form-input"]} inputValue={quizOptions.category} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} optionValueOne="sports" optionValueTwo="history" optionValueThree="geography" optionValueFour="film" optionValueFive="music"/>
          
          {/* difficulty */}
          <SelectInput id="difficulty" labelText="Select Difficulty" className={classes["form-input"]} inputValue={quizOptions.difficulty} onChange={(e) =>dispatch (handleChange({name:e.target.name, value:e.target.value}))} optionValueOne="easy" optionValueTwo="medium" optionValueThree="hard"/>
           </div>
         {quizOptions.amount > 0 && quizOptions.amount <=50 && <Button type='submit' onClick={handleSubmit} className={classes["submit-btn"]}>
            Start
          </Button> }
        </form>
      </section>
    </main>
  )

  }

  export default SetupForm