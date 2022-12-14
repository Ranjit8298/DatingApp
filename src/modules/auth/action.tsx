import {
  SAVE_NewReference,
  SAVE_USER_DETAILS,
  SAVE_SINGLE_USER_DETAILS,
  SAVE_CURRENT_ADDRESS,
  SAVE_MODE,
  SAVE_MOBILE_NUMBER,
  RESET,
  SAVE_LOGIN_MOBILE,
  SAVE_SINGLE_USER_SIGNUP_DETAILS
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

export const saveSingleUserSignUpDetails = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_SINGLE_USER_SIGNUP_DETAILS,
      payload: {saveSingleUserSignUpDetails: data},
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

export const saveLoginMobileNumber = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_LOGIN_MOBILE,
      payload: {saveLoginMobileNumber: data},
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
