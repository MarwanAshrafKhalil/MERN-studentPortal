import { createSlice } from "@reduxjs/toolkit";

interface signinState {
  loginState: boolean;
  isLoading: boolean;
}

const initialState: signinState = {
  loginState: false,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "logging",
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
    loggedIn: (state) => {
      state.loginState = true;
    },
    loggedOut: (state) => {
      state.loginState = false;
    },
  },
});

export default loginSlice.reducer;
