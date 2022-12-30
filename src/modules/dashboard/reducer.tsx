import {
  SAVE_USER_MESSAGE,
  FILTER_LOGIN_USER_DATA,
  FILTER_SIGNUP_USER_DATA,
} from './type';

const initialState = {
  saveUserMessage: [],
  filtersignupUserData: [],
  filterLoginUserData: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_MESSAGE:
      return {...state, ...action.payload};
    case FILTER_LOGIN_USER_DATA:
      return {...state, ...action.payload};
    case FILTER_SIGNUP_USER_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default reducer;
