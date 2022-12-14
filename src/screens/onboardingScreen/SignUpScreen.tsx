import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';
import CustomBackButton from '../../components/CustomBackButton';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import CommonFunction from '../../utils/CommonFunction';
import database, {firebase} from '@react-native-firebase/database';
import {connect} from 'react-redux';
import {saveNewReference, saveMode, saveMobileNumber} from '../../modules/auth';

interface props {
  navigation: any;
  saveNewReference: any;
  saveMode: any;
  saveMobileNumber: any;
}

const SignUpScreen = (props: props) => {
  const [mobile, setMobile] = useState('');
  const [allUserData, saveAllUserData] = useState<any[]>([]);
  
  React.useEffect(() => {
    getDataFromFirebase();
  }, []);

  const saveSignUpData = () => {
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    let userRefNumber = `userDetails_database_${randomNumber}`;
    props.saveNewReference(userRefNumber);

    database()
      .ref(userRefNumber)
      .set({
        userMobileNumber: mobile,
        userId: uuidv4(),
      })
      .then(() =>
        CommonFunction.isToast('success', 'Your Data Saved Successfully'),
      );
  };

  const getDataFromFirebase = () => {
    firebase
      .database()
      .ref()
      .on('value', snapshot => {
        let responselist = snapshot.val();
        saveAllUserData(Object.values(responselist));
      });
  };

  const validateSignUp = () => {
    let reg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (CommonFunction.isNullUndefined(mobile)) {
      CommonFunction.isToast('error', 'Please Enter Mobile Number');
    } else if (reg.test(mobile) === false) {
      CommonFunction.isToast('error', 'Please Enter Correct Mobile Number');
    } else {
      props.navigation.navigate('OtpScreen', {mobile: mobile});
      setMobile('');
      saveSignUpData();
      props.saveMode('signup');
      props.saveMobileNumber(mobile);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <Text style={styles.loginTxt}>{constants.string.signUp}</Text>

        <CustomInputBox
          headerTxt={constants.string.mobileNumber}
          placeholderTxt={constants.string.enterMobileNum}
          value={mobile}
          onChangeText={(val: any) => setMobile(val)}
          keyboardType="number-pad"
          inputViewStyle={styles.inputViewStyle}
          returnKeyType={'done'}
          maxLength={10}
        />
        <View style={styles.loginView}>
          <CustomButton
            onPress={() => {
              validateSignUp();
            }}
            txt={constants.string.signUp.toUpperCase()}
            btnStyle={styles.btnStyle}
          />

          <TouchableOpacity
            style={styles.forgotTouchStyle}
            activeOpacity={0.8}
            onPress={() => {
              props.navigation.navigate('LoginScreen');
            }}>
            <Text style={styles.forgotTxt}>
              {constants.string.alreadyAMamber}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Image style={styles.footerImg} source={constants.images.cityImg} /> */}
      </ScrollView>
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
    fontSize: constants.vw(16.5),
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  circleView: {
    width: constants.vw(200),
    height: constants.vw(200),
    borderRadius: constants.vw(100),
    backgroundColor: constants.colors.white,
    opacity: 0.3,
    position: 'absolute',
    top: constants.vh(-130),
    end: constants.vh(-70),
  },
  footerImg: {
    width: '100%',
    bottom: constants.vh(-75),
    opacity: 0.7,
  },
});

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  saveNewReference: (data: any) => saveNewReference(data),
  saveMode: (data: any) => saveMode(data),
  saveMobileNumber: (data: any) => saveMobileNumber(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
