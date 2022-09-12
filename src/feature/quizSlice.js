import { createSlice } from "@reduxjs/toolkit";
import getQuestions from "./quizThunk";

const initialState = {
  isLoading: false,
  isSetupFormOpen: true,
  questions: [],
  index: 0,
  numOfCorrectAnswers: 0,
  error: false,
  isModalOpen: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.index < state.questions.length - 1) {
        state.index = state.index + 1;
      } else {
        quizSlice.caseReducers.openModal(state);
        state.index = 0;
      }
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.numOfCorrectAnswers = 0;
      state.isSetupFormOpen = true;
    },
    checkAnswers: (state, action) => {
      if (action.payload) {
        state.numOfCorrectAnswers = state.numOfCorrectAnswers + 1;
      }
      quizSlice.caseReducers.nextQuestion(state);
    },
    handleChange: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state.quizOptions = { ...state.quizOptions, [name]: value };
    },
  },
  extraReducers: {
    [getQuestions.pending]: (state) => {
      state.isLoading = true;
      state.isSetupFormOpen = false;
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSetupFormOpen = false;
      state.questions = action.payload;
      state.error = false;
    },
    [getQuestions.rejected]: (state, action) => {
      state.isSetupFormOpen = true;
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const {
  nextQuestion,
  prevQuestion,
  closeModal,
  checkAnswers,
  cleanSetupForm,
} = quizSlice.actions;

export default quizSlice.reducer;
