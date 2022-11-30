import moment from 'moment';
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextStyle,
  StyleSheet,
  Button
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import constants from '../../constants';

interface Props {
  // label?: string;
  // value?: string;
  // fieldName?: any;
  // container?: Object;
  // majorContainer?: any;
  // placeholder?: string;
  // onChangeText: Function;
  // titleStyle?: TextStyle | Array<TextStyle>;
  // hasError?: string;
  // isDefault?: boolean;
  // isDisable?: boolean;
  // minDate?: any;
  // maxDate?: any;
  // dateFormat?: string;
};

const CustomDateInput = (props: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  // const { container } = props;
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateInputLabel: {
    color: constants.colors.white,
    fontSize: constants.vw(15.5),
    fontWeight: '400'
  },
  dateInputView: {
    marginStart: constants.vw(40),
  },
  dateInputTouch: {
    borderBottomWidth: 1,
    borderBottomColor: constants.colors.white,
    width: constants.vw(310),
    height: constants.vh(45),
    fontSize: constants.vw(15.5)
  }
})

export default CustomDateInput;
