import * as requestFromServer from "./quizzes.crud";
import { quizzesSlice } from "./quizzes.slice";
import { Dispatch } from "redux";

const { actions: quizActions } = quizzesSlice;

export const fetchQuizzes = () => async (dispatch: Dispatch) => {
  dispatch(quizActions.openLoader());
  try {
    const response = await requestFromServer.getQuizzes();
    let responseData;
    if (response) {
      responseData = await response.json();
    }

    if (responseData.success === false) {
      dispatch(quizActions.catchError(responseData));
    } else {
      dispatch(quizActions.fetchQuizzes(responseData));
    }
  } catch (error) {
    dispatch(quizActions.catchError(error));
  } finally {
    dispatch(quizActions.closeLoader());
  }
};
