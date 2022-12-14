import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizOptions: {
    limit: 5,
    category: "sports",
    difficulty: "medium",
  },
};

const setupFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state.quizOptions = { ...state.quizOptions, [name]: value };
    },
  },
});

export const { handleChange } = setupFormSlice.actions;

export default setupFormSlice.reducer;
