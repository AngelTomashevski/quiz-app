import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const theme = {
  sports: "sport_and_leisure",
  history: "history",
  geography: "geography",
  film: "film_and_tv",
  music: "music",
};

const getQuestions = createAsyncThunk(
  "quiz/getQuestions",
  async (url, thunkAPI) => {
    try {
      const response = await axios(url);
      if (response) {
        const data = response.data;
        console.log(data);
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default getQuestions;
