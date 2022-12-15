import {
  SAVE_NewReference,
  SAVE_USER_DETAILS,
  SAVE_SINGLE_USER_DETAILS,
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
