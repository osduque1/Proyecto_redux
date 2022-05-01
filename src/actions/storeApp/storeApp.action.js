import {
  SAVE_INFO_STARTED,
  SAVE_INFO_SUCCESS,
  SAVE_INFO_FAILURE,
  VALIDATE_INFO_STARTED,
  VALIDATE_INFO_SUCCESS,
  VALIDATE_INFO_FAILURE,
} from "../../constants/storeApp/storeApp.constant.js";
import { UPDATE_INFO_USER } from "../../constants/storeApp/storeApp.types.js";

import store from "../../Store";

export const updateInfoUser = payload => ({
  type: UPDATE_INFO_USER,
  payload
});

export const saveInfoAction = () => (dispatch) => {
  const { isLoading, isError } = store.getState().storeApp;
  console.log(isLoading);
  console.log(isError);

  dispatch({
    type: SAVE_INFO_STARTED,
  });
  dispatch({
    type: SAVE_INFO_SUCCESS,
  });
  dispatch({
    type: SAVE_INFO_FAILURE,
  });
};

export const validateInfo = () => (dispatch) => {
  const { infoUser } = store.getState().storeApp;
  console.log(infoUser);
  dispatch({
    type: VALIDATE_INFO_STARTED,
  });
  dispatch({
    type: VALIDATE_INFO_SUCCESS,
  });
  dispatch({
    type: VALIDATE_INFO_FAILURE,
  });
};
