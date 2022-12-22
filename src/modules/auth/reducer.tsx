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

const initialState = {
  saveNewReference: '',
  saveUserDetails: [],
  saveSingleUserDetails: {},
  saveCurrentAddress: '',
  saveMode: '',
  saveMobileNumber: '',
  saveSignupUserDetails: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_NewReference:
      return {...state, ...action.payload};
    case SAVE_USER_DETAILS:
      return {...state, ...action.payload};
    case SAVE_SINGLE_USER_DETAILS:
      return {...state, ...action.payload};
    case SAVE_CURRENT_ADDRESS:
      return {...state, ...action.payload};
    case SAVE_MODE:
      return {...state, ...action.payload};
    case SAVE_MOBILE_NUMBER:
      return {...state, ...action.payload};
    case SAVE_SIGN_UP_USER_DETAILS:
      return {...state, ...action.payload};
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default reducer;
