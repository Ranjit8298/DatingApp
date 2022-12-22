import {
  SAVE_NewReference,
  SAVE_USER_DETAILS,
  SAVE_SINGLE_USER_DETAILS,
  SAVE_CURRENT_ADDRESS,
  SAVE_MODE,
  SAVE_MOBILE_NUMBER,
  SAVE_SIGN_UP_USER_DETAILS,
  RESET,
} from './type';

export const saveNewReference = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_NewReference,
      payload: {saveNewReference: data},
    });
  };
};

export const saveUserDetails = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_USER_DETAILS,
      payload: {saveUserDetails: data},
    });
  };
};

export const saveSingleUserDetails = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_SINGLE_USER_DETAILS,
      payload: {saveSingleUserDetails: data},
    });
  };
};

export const saveCurrentAddress = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_CURRENT_ADDRESS,
      payload: {saveCurrentAddress: data},
    });
  };
};

export const saveMode = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_MODE,
      payload: {saveMode: data},
    });
  };
};

export const saveMobileNumber = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_MOBILE_NUMBER,
      payload: {saveMobileNumber: data},
    });
  };
};

export const saveSignupUserDetails = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_SIGN_UP_USER_DETAILS,
      payload: {saveSignupUserDetails: data},
    });
  };
};

export const Logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: RESET,
    });
    // success();
  };
};
