import * as requestFromServer from "./announs.crud";
import { announsSlice } from "./announs.slice";

const { actions: announActions } = announsSlice;

export const fetchAnnouns = () => async (dispatch) => {
  dispatch(announActions.openLoader());
  try {
    const response = await requestFromServer.getAnnoun();
    let responseData;
    if (response) {
      responseData = await response.json();
    }
    console.log("22#: ", responseData);
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
