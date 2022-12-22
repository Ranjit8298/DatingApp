import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import constants from '../../constants';
interface props {
  navigation?: any;
  maxLength: number;
  value: any;
  onChangeText: Function;
  refe: any;
  autoFocus?: boolean;
  onKeyPress: Function;
  onSubmitEditing: Function;
  returnKeyType?: any;
}
const CustomOtpBox = (props: props) => {
  return (
    <TextInput
      ref={props.refe}
      style={styles.codeBoxStyle}
      maxLength={props.maxLength}
      keyboardType="number-pad"
      value={props.value}
      selectionColor={constants.colors.navy}
      onChangeText={text => {
        props.onChangeText(text);
      }}
      autoFocus={props.autoFocus}
      onKeyPress={e => props.onKeyPress(e)}
      onSubmitEditing={() => props.onSubmitEditing()}
      returnKeyType={props.returnKeyType}
    />
  );
};
const styles = StyleSheet.create({
  codeBoxStyle: {
    width: constants.vw(43),
    height: constants.vh(43),
    borderWidth: 1,
    borderRadius: constants.vw(4),
    borderColor: constants.colors.inputborderColor,
    textAlign: 'center',
  },
});
export default CustomOtpBox;
