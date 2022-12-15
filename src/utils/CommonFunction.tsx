import constants from '../constants';
import {Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';

function isNullUndefined(item: any, check: boolean = false) {
  try {
    let x =
      item === null ||
      item === undefined ||
      item === 'undef' ||
      item === 'undefined' ||
      item === '' ||
      Object.keys(item).length === 0;
    if (check) {
    }
    return x;
  } catch (err) {
    return true;
  }
}

function isToast(type: any, textMsg: any) {
  try {
    Toast.show({
      type: type, //success or error
      text2: textMsg,
      autoHide: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export default {
  isNullUndefined,
  isToast,
};
