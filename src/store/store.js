import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../feature/quizSlice";
import setupFormReducer from "../feature/setupFormSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    form: setupFormReducer,
  },
});
