import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomBackButton from '../../components/CustomBackButton';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux';
import CommonFunction from '../../utils/CommonFunction';
import moment from 'moment';

interface props {
  navigation: any;
  saveNewReference: any;
  route: any;
}

const BasicInformationScreen = (props: props) => {
  const [date, setDate] = useState(new Date('2004-01-01'));
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [gender, setGender] = useState(true);

  const currentDate = new Date(date).toISOString();
  const getFormetedDate = moment(currentDate).utc().format('YYYY-MM-DD');
 
  const getOldYear = new Date(getFormetedDate).getFullYear();

  const getCurrentYear = new Date().getFullYear();
  const getUserAge: any = getCurrentYear - getOldYear;
  
  const saveBasicInfoData = () => {
    database()
      .ref(props.saveNewReference)
      .update({
        userFirstName: name,
        userBirthday: getFormetedDate,
        userGender: male === true ? 'male' : 'female',
        userEmail: email,
        userAge: getUserAge ? getUserAge : '19',
      })
      .then(() =>
        CommonFunction.isToast('success', 'Your Basic Info Saved Successfully'),
      );
  };

  const toggleMaleGender = () => {
    if (male === false || female === true) {
      setMale(true);
      setFemale(false);
      setGender(false);
    } else {
      setMale(false);
    }
  };

  const toggleFemaleGender = () => {
    if (female === false || male === true) {
      setFemale(true);
      setMale(false);
      setGender(false);
    } else {
      setFemale(false);
    }
  };

  const ValidateBasicInfo = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name === '') {
      CommonFunction.isToast('error', 'Please Enter First Name');
    } else if (gender === true) {
      CommonFunction.isToast('error', 'Please Select Gender');
    } else if (email === '') {
      CommonFunction.isToast('error', 'Please Enter Email');
    } else if (reg.test(email) === false) {
      CommonFunction.isToast('error', 'Please Enter Correct Email');
    } else {
      props.navigation.navigate('ProfileImageChooseScreen');
      saveBasicInfoData();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomBackButton
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={styles.circleView} />
      <View
        style={{
          ...styles.circleView,
          top: constants.vh(-150),
          end: constants.vh(-10),
        }}
      />
      <View
        style={{
          ...styles.circleView,
          top: constants.vh(-50),
          end: constants.vh(-180),
        }}
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.loginTxt}>{constants.string.basicInfo}</Text>
        <CustomInputBox
          headerTxt={constants.string.firstName}
          placeholderTxt={constants.string.enterFirstName}
          value={name}
          onChangeText={(val: any) => {
            setName(val);
          }}
          keyboardType="default"
          inputViewStyle={styles.inputViewStyle}
          returnKeyType={'next'}
        />

        <View style={styles.datePickerView}>
          <Text style={styles.txtInputHeader}>{constants.string.birthday}</Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="date"
            androidVariant="nativeAndroid"
            textColor="#fff"
            maximumDate={new Date('2004-01-01')}
          />
          <Text style={styles.txtInputHeader}>{constants.string.gender}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                toggleMaleGender();
              }}>
              <Image
                style={{
                  ...styles.genderImg,
                  tintColor: male
                    ? constants.colors.white
                    : constants.colors.black,
                }}
                source={constants.images.maleImg}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                toggleFemaleGender();
              }}>
              <Image
                style={{
                  ...styles.genderImg,
                  tintColor: female
                    ? constants.colors.white
                    : constants.colors.black,
                }}
                source={constants.images.femaleImg}
              />
            </TouchableOpacity>
          </View>
        </View>

        <CustomInputBox
          headerTxt={constants.string.email.toUpperCase()}
          placeholderTxt={constants.string.enterEmail}
          value={email}
          onChangeText={(val: any) => {
            setEmail(val);
          }}
          keyboardType="default"
          inputViewStyle={styles.inputViewStyle}
          returnKeyType={'done'}
        />

        <View style={styles.loginView}>
          <CustomButton
            onPress={() => {
              ValidateBasicInfo();
            }}
            txt={constants.string.submit.toUpperCase()}
            btnStyle={styles.btnStyle}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.colorPrimary,
    flex: 1,
  },
  loginTxt: {
    color: constants.colors.white,
    marginStart: constants.vw(40),
    fontSize: constants.vw(32),
    fontWeight: '400',
    marginTop: constants.vh(60),
    letterSpacing: 0.8,
  },
  inputViewStyle: {
    marginTop: constants.vh(40),
  },
  btnStyle: {
    backgroundColor: constants.colors.secondary,
    marginStart: constants.vw(40),
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: constants.vh(80),
    marginBottom: constants.vh(10),
  },
  forgotTouchStyle: {
    justifyContent: 'center',
    marginEnd: constants.vw(27),
  },
  forgotTxt: {
    color: constants.colors.navy,
    fontSize: constants.vw(16),
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  circleView: {
    width: constants.vw(200),
    height: constants.vh(200),
    borderRadius: constants.vw(100),
    backgroundColor: constants.colors.white,
    opacity: 0.3,
    position: 'absolute',
    top: constants.vh(-130),
    end: constants.vh(-70),
  },
  datePickerView: {
    marginStart: constants.vw(40),
    marginTop: constants.vh(20),
  },
  txtInputHeader: {
    color: constants.colors.white,
    fontSize: constants.vw(15.5),
    fontWeight: '500',
  },
  genderImg: {
    width: constants.vw(60),
    height: constants.vh(60),
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state: any) => ({
  saveNewReference: state.auth.saveNewReference,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInformationScreen);
