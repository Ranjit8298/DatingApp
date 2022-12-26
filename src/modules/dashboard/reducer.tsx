import {SAVE_USER_MESSAGE} from './type';

const initialState = {
  saveUserMessage: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_MESSAGE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default reducer;
