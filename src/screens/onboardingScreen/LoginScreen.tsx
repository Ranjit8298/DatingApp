import React, {useState, useEffect, createRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomBackButton from '../../components/CustomBackButton';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';
import database, {firebase} from '@react-native-firebase/database';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonFunction from '../../utils/CommonFunction';
import {connect} from 'react-redux';
import {saveSingleUserDetails, saveUserDetails,saveMode} from '../../modules/auth';

interface props {
  navigation: any;
  saveUserDetails: any;
  saveUserDetailsData: any;
  saveSingleUserDetails: any;
  saveMode:any;
}

const LoginScreen = (props: props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  const getDataFromFirebase = () => {
    firebase
      .database()
      .ref()
      .on('value', snapshot => {
        let responselist = snapshot.val();
        props.saveUserDetails(Object.values(responselist));
      });
  };

  const validateLogin = () => {
    let mobReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (CommonFunction.isNullUndefined(email)) {
      CommonFunction.isToast('error', 'Please Enter Mobile Number');
    } else if (mobReg.test(email) === false) {
      CommonFunction.isToast('error', 'Please Enter Correct Mobile Number');
    } else if (
      CommonFunction.isNullUndefined(password) &&
      password.length < 4
    ) {
      CommonFunction.isToast('error', 'Please enter 4 digit password');
    } else {
      props.saveUserDetailsData.map((user: any) => {
        if (user.userMobileNumber === email) {
          props.navigation.navigate('AccessLoactionScreen');
          CommonFunction.isToast('success', 'Login Successfully');
          setEmail('');
          setPassword('');
          props.saveSingleUserDetails(user);
          props.saveMode('login');
        }
      });
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
        <Text style={styles.loginTxt}>{constants.string.loginTxt}</Text>

        <CustomInputBox
          headerTxt={constants.string.emailTxt}
          placeholderTxt={constants.string.enterEmailTxt}
          value={email}
          onChangeText={(val: any) => {
            setEmail(val);
          }}
          keyboardType="number-pad"
          inputViewStyle={styles.inputViewStyle}
          returnKeyType={'done'}
        />

        <CustomInputBox
          headerTxt={constants.string.password.toUpperCase()}
          placeholderTxt={constants.string.enterPass}
          value={password}
          onChangeText={(val: any) => {
            setPassword(val);
          }}
          keyboardType="number-pad"
          inputViewStyle={styles.inputViewStyle}
          returnKeyType={'done'}
          secureTextEntry
        />

        <View style={styles.loginView}>
          <CustomButton
            onPress={() => {
              validateLogin();
            }}
            txt={constants.string.loginTxt.toUpperCase()}
            btnStyle={styles.btnStyle}
          />

          <TouchableOpacity
            style={styles.forgotTouchStyle}
            activeOpacity={0.8}
            onPress={() => {}}>
            <Text style={styles.forgotTxt}>{constants.string.forgotPass}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: constants.colors.white}}>
              {constants.string.dontHaveAcc}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                props.navigation.navigate('SignUpScreen');
              }}>
              <Text style={styles.signUpBtnTxt}>{constants.string.signUp}</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: constants.vh(150),
    letterSpacing: 0.8,
  },
  inputViewStyle: {
    marginTop: constants.vh(40),
  },
  btnStyle: {
    backgroundColor: constants.colors.secondary,
    width: constants.vw(140),
    marginStart: constants.vw(40),
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: constants.vh(80),
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
  footerView: {
    width: '100%',
    height: constants.vh(60),
    backgroundColor: constants.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    marginTop: constants.vh(179),
  },
  signUpBtnTxt: {
    textAlign: 'center',
    color: constants.colors.colorPrimary,
    marginStart: constants.vw(8),
    fontWeight: '700',
  },
});

const mapStateToProps = (state: any) => ({
  saveUserDetailsData: state.auth.saveUserDetails,
});

const mapDispatchToProps = {
  saveUserDetails: (data: any) => saveUserDetails(data),
  saveSingleUserDetails: (data: any) => saveSingleUserDetails(data),
  saveMode: (data: any) => saveMode(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
