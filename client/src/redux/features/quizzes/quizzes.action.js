import * as requestFromServer from "./quizzes.crud";
import { quizzesSlice } from "./quizzes.slice";

const { actions: quizActions } = quizzesSlice;

export const fetchQuizzes = () => async (dispatch) => {
  dispatch(quizActions.openLoader());
  try {
    const response = await requestFromServer.getQuizzes();
    const responseData = await response.json();
    console.log("22#: ", responseData);
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
