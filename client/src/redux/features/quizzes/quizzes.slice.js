import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  quizzesFound: false,
  numberQuizzes: 0,
  courseName: "",
  quizzesName: [],
  quizzesTopics: [],
  quizzesDue: [],
  quizzesContent: [],
  isLoading: false,
  error: "",
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
    fetchQuizzes: (state, action) => {
      state.data = action.payload;
      state.error = "";
    },

    catchError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default quizzesSlice.reducer;
