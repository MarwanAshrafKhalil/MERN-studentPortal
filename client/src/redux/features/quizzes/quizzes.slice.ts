import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Quiz {
//   name: string;
//   topic: string;
//   dueDate: Date;
//   content: string[];
//   courseName: string;
// }

interface Quiz {
  name: string;

  assignments: [];
  quizzes: { name: string; topic: string; dueDate: Date; content: string[] }[];
}

interface QuizzesState {
  data: Quiz[];
  quizzesFound: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: QuizzesState = {
  data: [],
  quizzesFound: false,
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
    fetchQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.data = action.payload;
      state.quizzesFound = true;
      state.error = "";
    },

    catchError: (state, action) => {
      state.error = action.payload || "Something went wrong";
    },
  },
});

export default quizzesSlice.reducer;
