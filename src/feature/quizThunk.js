import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const theme = {
  sports: 21,
  history: 23,
  geography: 22,
  film: 11,
  music: 12,
};

// const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;

const getQuestions = createAsyncThunk(
  "quiz/getQuestions",
  async (url, thunkAPI) => {
    try {
      //   const { amount, category, difficulty } =
      //     thunkAPI.getState().quiz.quizOptions;
      //   const url = `https://opentdb.com/api.php?amount=${amount}&category=${theme[category]}&difficulty=${difficulty}&type=multiple`;

      const response = await axios(url);
      if (response) {
        const data = response.data.results;
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export default getQuestions;
