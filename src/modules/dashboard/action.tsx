import {
  SAVE_USER_MESSAGE,
  FILTER_LOGIN_USER_DATA,
  FILTER_SIGNUP_USER_DATA,
} from './type';

export const saveUserMessage = (data: any) => {
  return (dispatch: any, getState: any) => {
    const allmessageData = getState().dashboard.saveUserMessage;
    dispatch({
      type: SAVE_USER_MESSAGE,
      payload: {saveUserMessage: [...allmessageData, data]},
    });
  };
};

export const filterLoginUserData = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: FILTER_LOGIN_USER_DATA,
      payload: {filterLoginUserData: data},
    });
  };
};

export const filtersignupUserData = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: FILTER_SIGNUP_USER_DATA,
      payload: {filtersignupUserData: data},
    });
  };
};
