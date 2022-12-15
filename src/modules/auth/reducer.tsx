import {
  SAVE_NewReference,
  SAVE_USER_DETAILS,
  SAVE_SINGLE_USER_DETAILS,
} from './type';

const initialState = {
  saveNewReference: '',
  saveUserDetails: [],
  saveSingleUserDetails: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_NewReference:
      return {...state, ...action.payload};
    case SAVE_USER_DETAILS:
      return {...state, ...action.payload};
    case SAVE_SINGLE_USER_DETAILS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
export default reducer;
