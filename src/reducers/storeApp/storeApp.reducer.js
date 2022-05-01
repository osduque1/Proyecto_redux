import { 
  UPDATE_INFO_USER 
} from "../../constants/storeApp/storeApp.types.js";
import {
  SAVE_INFO_STARTED,
  SAVE_INFO_SUCCESS,
  SAVE_INFO_FAILURE,
  VALIDATE_INFO_STARTED,
  VALIDATE_INFO_SUCCESS,
  VALIDATE_INFO_FAILURE
} from "../../constants/storeApp/storeApp.constant.js";

export const initialState = {
  infoUser: {
    name: "",
    lastName: "",
    email: "",
    password: ""
  },
  saveInfo: {
    isLoading: false,
    isError: false
  },
  validateInfo: {
    isLoading: false,
    isError: false
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  const localState = state || initialState;

  switch (type) {
    case UPDATE_INFO_USER:
      return {
        ...localState,
        infoUser: payload,
      };
    case SAVE_INFO_STARTED:
      return {
        ...localState,
        saveInfo: {
          ...localState.saveInfo,
          isLoading: true,
        },
      };
    case SAVE_INFO_SUCCESS:
      return {
        ...localState,
        saveInfo: {
          ...localState.saveInfo,
          isLoading: false,
          payload: payload
        },
      };
    case SAVE_INFO_FAILURE:
      return {
        ...localState,
        saveInfo: {
          ...localState.saveInfo,
          isLoading: false,
          isError: true
        },
      };
    case VALIDATE_INFO_STARTED:
      return {
        ...localState,
        validateInfo: {
          ...localState.validateInfo,
          isLoading: true,
        },
      };
    case VALIDATE_INFO_SUCCESS:
      return {
        ...localState,
        validateInfo: {
          ...localState.validateInfo,
          isLoading: false,
          payload: payload
        },
      };
    case VALIDATE_INFO_FAILURE:
      return {
        ...localState,
        validateInfo: {
          ...localState.validateInfo,
          isLoading: false,
          isError: true,
        },
      };
    default:
      return { ...localState };
  }
};
