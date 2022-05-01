import {
  SAVE_INFO_STARTED,
  SAVE_INFO_SUCCESS,
  VALIDATE_INFO_STARTED,
  VALIDATE_INFO_SUCCESS,
  VALIDATE_INFO_FAILURE,
  VALIDATE_INFO_RESET
} from "../../constants/storeApp/storeApp.constant.js";
import store from "../../Store";

export const saveInfo = payload => dispatch => {
  dispatch({
    type: SAVE_INFO_STARTED
  });
  dispatch({
    type: SAVE_INFO_SUCCESS,
    payload
  });
};

export const validateInfo = (payload) => (dispatch) => {
  const { infoUser } = store.getState().storeApp.saveInfo;
  const { isCompleted } = store.getState().storeApp.validateInfo;

  if(isCompleted){
    dispatch({
      type: VALIDATE_INFO_RESET
    });
  }

  dispatch({
    type: VALIDATE_INFO_STARTED,
  });

  if(infoUser.email === payload.email && infoUser.password === payload.password){
    dispatch({
      type: VALIDATE_INFO_SUCCESS,
      payload: payload.email
    });
  }else{
    dispatch({
      type: VALIDATE_INFO_FAILURE,
      payload: payload.email
    });
  }
};
