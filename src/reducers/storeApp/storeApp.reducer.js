import {
  SAVE_INFO_STARTED,
  SAVE_INFO_SUCCESS,
  VALIDATE_INFO_STARTED,
  VALIDATE_INFO_SUCCESS,
  VALIDATE_INFO_FAILURE,
  VALIDATE_INFO_RESET
} from "../../constants/storeApp/storeApp.constant.js";

export const initialState = {
  saveInfo: {
    infoUser: {
      name: "",
      lastName: "",
      email: "",
      password: ""
    },
    isLoading: false
  },
  validateInfo: {
    email: "",
    isCompleted: false,
    isLoading: false,
    isError: false
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  const localState = state || initialState;

  switch (type) {
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
          infoUser: payload,
          isLoading: false
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
          isCompleted: true,
          isLoading: false,
          email: payload
        },
      };
    case VALIDATE_INFO_FAILURE:
      return {
        ...localState,
        validateInfo: {
          ...localState.validateInfo,
          email: payload,
          isCompleted: true,
          isLoading: false,
          isError: true
        },
      };
    case VALIDATE_INFO_RESET:
      return {
        ...localState,
        validateInfo: initialState.validateInfo
      };
    default:
      return { ...localState };
  }
};
