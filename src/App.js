import React from "react";
import classes from "./App.module.css";
import SetupForm from "./components/setup-form/SetupForm.jsx";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner.jsx";
import Modal from "./components/UI/modal/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "./feature/quizSlice";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Error from "./components/error/Error";
import DisplayAnswersSection from "./components/display-answer-section/DisplayAnswersSection";

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
    <main className={classes.main} onKeyDown={close}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<SetupForm />} />
        <Route path="/about" element={<About />} />
        {questions.length > 0 && !error && (
          <Route path="/answers" element={<DisplayAnswersSection />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      {isModalOpen && <Modal />}
      <Footer />
    </main>
  );
}

export default App;
