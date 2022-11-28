import moment from 'moment';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextStyle,
  StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import constants from '../../constants';

/**
 * custom imports
 */
import Style from './style';

type Props = {
  label?: string;
  value?: string;
  fieldName?: any;
  container?: Object;
  majorContainer?: any;
  placeholder?: string;
  onChangeText: Function;
  titleStyle?: TextStyle | Array<TextStyle>;
  hasError?: string;
  isDefault?: boolean;
  isDisable?: boolean;
  minDate?: any;
  maxDate?: any;
  dateFormat?: string;
};

const CustomDateInput = (props: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDatePickerVisibility(false);

    props.onChangeText(moment(date).format(props.dateFormat));
  };
  const {container} = props;
  return (
    <View style={props.majorContainer}>
      <Text style={[Style.textInputLabel, props.titleStyle]}>
        {props.placeholder}

        {props.isDefault && (
          <Text
            style={{color: constants.colors.red, fontSize: constants.vw(15)}}>
            {'*'}
          </Text>
        )}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={showDatePicker}
        disabled={props.isDisable}
        style={{
          ...Style.container,
          ...container,
          backgroundColor: props.isDisable
            ? constants.colors.gray
            : constants.colors.colorPrimary,
        }}>
        <Text
          style={[
            Style.textInput,
            {
              color:
                props.value === ''
                  ? constants.colors.gray
                  : constants.colors.black,
            },
          ]}>
          {props.value === '' ? props.label : props.value}
        </Text>

        <View style={Style.passwordIconContainer}>
          {/* <Image
            source={constants.images.calendarIcon}
            style={{tintColor: constants.colors.colorPrimary}}
          /> */}
        </View>
      </TouchableOpacity>
      {/* {typeof props.hasError !== 'undefined' ? (
        <View style={styles.errorStyle}>
          {props.hasError !== '' && (
            <>
              <Image
                source={constants.images.warning}
                style={styles.warningImage}
                resizeMode={'contain'}
              />
              <Text {...CommonFunction.nFixedLines(2)} style={styles.errorText}>
                {props.hasError}
              </Text>
            </>
          )}
        </View>
      ) : null} */}
      <DateTimePickerModal
        testID="datePicker"
        isVisible={isDatePickerVisible}
        mode={props.fieldName}
        date={
          props.value === ''
            ? new Date()
            : new Date(moment(props.value, props.dateFormat))
        }
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={props.maxDate}
        minimumDate={props.minDate}
        // display={'inline'}
        // locale="en_GB"
        isDarkModeEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    width: constants.vw(310),
    marginVertical: constants.vw(0),
    fontSize: 15,
    color: constants.colors.red,
    textAlign: 'left',
    left: constants.vw(0),
  },
  errorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },
  warningImage: {width: 25, height: 25},
});

CustomDateInput.defaultProps = {
  container: {},
  placeholder: '',
  majorContainer: {},
  dateFormat: 'DD-MMM-YYYY HH:mm',
};

export default CustomDateInput;
