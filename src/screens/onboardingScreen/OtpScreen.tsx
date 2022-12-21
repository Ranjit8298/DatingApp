import React, {useState, createRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Keyboard,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';
import CustomBackButton from '../../components/CustomBackButton';
import CustomOtpBox from '../../components/CustomOtpBox';
import CommonFunction from '../../utils/CommonFunction';
import auth from '@react-native-firebase/auth';

interface props {
  navigation: any;
  route: any;
}

const OtpScreen = (props: props) => {
  const [timerCount, setTimer] = useState(60);
  const [input1, setinput1] = useState('');
  const [input2, setinput2] = useState('');
  const [input3, setinput3] = useState('');
  const [input4, setinput4] = useState('');
  const [input5, setinput5] = useState('');
  const [input6, setinput6] = useState('');

  const [confirm, setConfirm] = useState(null);

  const mobile = props.route.params.mobile;
  const mode = props.route.params?.mode;
  console.log('mobile==>', mobile);

  const inputRef1: any = createRef();
  const inputRef2: any = createRef();
  const inputRef3: any = createRef();
  const inputRef4: any = createRef();
  const inputRef5: any = createRef();
  const inputRef6: any = createRef();

  const KEY_BACKSPACE = 'Backspace';
  const otp = `${input1}${input2}${input3}${input4}${input5}${input6}`;

  useEffect(() => {
    signUpMethod(mobile);
    setCountDown();
  }, []);

  const setCountDown = () => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  };

  async function signUpMethod(mobile: any) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(`+91 ${mobile}`);
      setConfirm(confirmation);
      console.log(confirmation);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmVerificationCode(otp: any) {
    try {
      await confirm.confirm(otp);
      setConfirm(null);
      // props.navigation.navigate('BasicInformationScreen');
    } catch (error) {
      console.log('Invalid code');
    }
  }

  const validateOtp = () => {
    if (CommonFunction.isNullUndefined(otp)) {
      CommonFunction.isToast('error', 'Please Enter OTP');
    } else if (otp.length < 6) {
      CommonFunction.isToast('error', 'Please Enter Correct OTP');
    } else {
      confirmVerificationCode(otp);
      props.navigation.navigate('BasicInformationScreen', {
        mode: mode,
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
      <Text style={styles.loginTxt}>{constants.string.verifyMobile}</Text>
      <Text
        style={{
          ...styles.loginTxt,
          fontSize: constants.vw(15),
          marginTop: constants.vh(15),
        }}>
        {constants.string.oneTimeOtp}
      </Text>
      <View style={{...styles.codeBoxStyle}}>
        <CustomOtpBox
          refe={inputRef1}
          maxLength={1}
          value={input1}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput1(val);
            val.length !== 0 ? inputRef2.current.focus() : null;
          }}
          onKeyPress={() => {}}
          autoFocus={true}
          onSubmitEditing={() => inputRef2.current.focus()}
        />
        <CustomOtpBox
          maxLength={1}
          refe={inputRef2}
          value={input2}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput2(val);
            val.length !== 0 ? inputRef3.current.focus() : null;
          }}
          onKeyPress={(e: any) => {
            e.nativeEvent.key === KEY_BACKSPACE
              ? input2.length === 0
                ? (inputRef1.current.focus(), setinput1(''))
                : setinput2('')
              : null;
          }}
          onSubmitEditing={() => inputRef3.current.focus()}
        />
        <CustomOtpBox
          maxLength={1}
          refe={inputRef3}
          value={input3}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput3(val);
            val.length !== 0 ? inputRef4.current.focus() : null;
          }}
          onKeyPress={(e: any) => {
            e.nativeEvent.key === KEY_BACKSPACE
              ? input3.length === 0
                ? (inputRef2.current.focus(), setinput2(''))
                : setinput3('')
              : null;
          }}
          onSubmitEditing={() => inputRef4.current.focus()}
        />
        <CustomOtpBox
          maxLength={1}
          refe={inputRef4}
          value={input4}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput4(val);
            val.length !== 0 ? inputRef5.current.focus() : null;
          }}
          onKeyPress={(e: any) => {
            e.nativeEvent.key === KEY_BACKSPACE
              ? input4.length === 0
                ? (inputRef3.current.focus(), setinput3(''))
                : setinput4('')
              : null;
          }}
          onSubmitEditing={() => inputRef5.current.focus()}
        />

        <CustomOtpBox
          maxLength={1}
          refe={inputRef5}
          value={input5}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput5(val);
            val.length !== 0 ? inputRef6.current.focus() : null;
          }}
          onKeyPress={(e: any) => {
            e.nativeEvent.key === KEY_BACKSPACE
              ? input5.length === 0
                ? (inputRef4.current.focus(), setinput4(''))
                : setinput5('')
              : null;
          }}
          onSubmitEditing={() => inputRef6.current.focus()}
        />
        <CustomOtpBox
          maxLength={1}
          refe={inputRef6}
          value={input6}
          onChangeText={(text: any) => {
            let val = text.replace(/[- #*;,.<>\\{\\}\\[\]\\\\/]/gi, '');
            setinput6(val);
          }}
          onKeyPress={(e: any) => {
            e.nativeEvent.key === KEY_BACKSPACE
              ? input6.length === 0
                ? (inputRef5.current.focus(), setinput5(''))
                : setinput6('')
              : null;
          }}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            ...styles.resendTxt,
            marginStart: constants.vh(30),
            marginTop: constants.vh(23),
          }}>
          {`${timerCount + ''} sec`}
        </Text>
        {timerCount === 0 && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.resendView}
            onPress={() => {}}>
            <Text style={styles.resendTxt}>{constants.string.resendOtp}</Text>
          </TouchableOpacity>
        )}
      </View>

      <CustomButton
        onPress={() => {
          validateOtp();
        }}
        txt={constants.string.submit}
        btnStyle={styles.btnStyle}
      />
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
  codeBoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: constants.vh(35),
    paddingHorizontal: constants.vw(20),
  },
  resendView: {
    alignSelf: 'flex-end',
    marginEnd: constants.vw(45),
    marginTop: constants.vh(20),
  },
  resendTxt: {
    color: constants.colors.white,
    fontWeight: 'bold',
    fontSize: constants.vw(16),
  },
  btnStyle: {
    backgroundColor: constants.colors.navy,
    alignSelf: 'center',
    marginTop: constants.vh(50),
  },
});
export default OtpScreen;
