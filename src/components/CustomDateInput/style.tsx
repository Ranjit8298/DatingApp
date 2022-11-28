import { StyleSheet } from 'react-native';
import constants from '../../constants';

export default StyleSheet.create({
  container: {
    width: constants.vw(310),
    height: constants.vh(45),
    borderBottomWidth: constants.vw(1),
    borderBottomColor: constants.colors.white,
    paddingHorizontal: constants.vw(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: constants.vh(10),
    marginStart: constants.vw(40),
  },
  textInputLabel: {
    color: constants.colors.white,
    fontSize: constants.vw(15.5),
    fontWeight: '400',
    marginTop: constants.vh(20),
    marginStart: constants.vw(40)
  },
  textInputContainer: {
  },
  passwordIconContainer: {
    height: constants.vw(20),
    width: constants.vw(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    color: constants.colors.white,
    marginTop: constants.vh(2),
    width: constants.vw(250),
    paddingVertical: 0,
    textAlign: 'left',
  },
  errorStyle: {
    borderColor: constants.colors.red,
    color: constants.colors.red,
  },
  errorWithOutStyle: {
    borderColor: constants.colors.black,
    color: constants.colors.black,
  },
  errorText: {
    marginVertical: constants.vh(6),
    fontSize: 14,
    color: constants.colors.red,
    textAlign: 'left',
  },
});
