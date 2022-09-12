import React from "react";
import classes from "./index.module.css";
import SetupForm from "./components/setup-form/SetupForm.jsx";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner.jsx";
import Modal from "./components/UI/modal/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, nextQuestion } from "./feature/quizSlice";
import DisplayCorrectAnswers from "./components/display-correctAnswers/DisplayCorrectAnswers.jsx";
import AnswersList from "./components/answers/AnswersList.jsx";
import Button from "./components/UI/button/Button.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Error from "./components/error/Error";

function App() {
  const { isLoading, questions, isModalOpen, error } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const close = (e) => {
    if (e.key === "Escape") {
      dispatch(closeModal());
      navigate("/");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <main onKeyDown={close}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<SetupForm />} />
        <Route path="/about" element={<About />} />
        {questions.length > 0 && !error && (
          <Route
            path="/answers"
            element={
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
            }
          />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      {isModalOpen && <Modal />}
      <Footer />
    </main>
  );
}

export default App;
