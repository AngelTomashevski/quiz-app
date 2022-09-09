import React from "react";
import classes from "./index.module.css";
import AnswersList from "./components/answers/AnswersList.jsx";
import SetupForm from "./components/setup-form/SetupForm.jsx";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner.jsx";
import Modal from "./components/UI/modal/Modal.jsx";
import Button from "./components/UI/button/Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, closeModal } from "./feature/quizSlice";
import DisplayCorrectAnswers from "./components/display-correctAnswers/DisplayCorrectAnswers.jsx";

function App() {
  const { isLoading, isSetupFormOpen } = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  const close = (e) => {
    if (e.key === "Escape") {
      dispatch(closeModal());
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (isSetupFormOpen) return <SetupForm />;

  return (
    <main onKeyDown={close}>
      <Modal />
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
    </main>
  );
}

export default App;
