import { Dispatch } from "redux";
import { loginSlice } from "./signIn.slice";

const { actions: loginActions } = loginSlice;

export const loggIn = () => async (dispatch: Dispatch) => {
  dispatch(loginActions.openLoader());
  try {
    dispatch(loginActions.loggedIn());
  } finally {
    dispatch(loginActions.closeLoader());
  }
};

export const loggOut = () => async (dispatch: Dispatch) => {
  dispatch(loginActions.openLoader());
  try {
    dispatch(loginActions.loggedOut());
  } finally {
    dispatch(loginActions.closeLoader());
  }
};
