import * as requestFromServer from "./announs.crud";
import { announsSlice } from "./announs.slice";
import { Dispatch } from "redux";

const { actions: announActions } = announsSlice;

export const fetchAnnouns = () => async (dispatch: Dispatch) => {
  dispatch(announActions.openLoader());
  try {
    const response = await requestFromServer.getAnnoun();
    let responseData;
    if (response) {
      responseData = await response.json();
    }

    if (responseData.success === false) {
      dispatch(announActions.catchError(responseData));
    } else {
      dispatch(announActions.fetchAnnoun(responseData));
    }
  } catch (error) {
    dispatch(announActions.catchError(error));
  } finally {
    dispatch(announActions.closeLoader());
  }
};
