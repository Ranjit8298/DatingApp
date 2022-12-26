import {SAVE_USER_MESSAGE} from './type';

export const saveUserMessage = (data: any) => {
  return (dispatch: any, getState: any) => {
    const allmessageData = getState().dashboard.saveUserMessage;
    dispatch({
      type: SAVE_USER_MESSAGE,
      payload: {saveUserMessage: [...allmessageData, data]},
    });
  };
};
