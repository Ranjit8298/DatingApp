import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import constants from "../../constants";
import CustomButton from "../../components/CustomButton";
import Lottie from 'lottie-react-native';

interface props {
  navigation: any;
}

const OnboardingScreen = (props: props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <Lottie style={{ marginTop: constants.vh(-70) }}
        source={require('../../assets/raw/onboarding_dating.json')} autoPlay loop />
      <Text style={styles.txtParagraph}>{'Users going through a vetting process to ensure you never match with bots.'}</Text>
      <View style={styles.absoluteView}>
        <CustomButton onPress={() => { props.navigation.navigate('CheckedInScreen') }} txt={constants.string.getStarted} />
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.white,
    flex: 1
  },
  absoluteView: {
    position: 'absolute',
    marginTop: constants.vh(650),
    alignSelf: 'center'
  },
  imageStyle: {
    width: constants.vw(235),
    height: constants.vh(360),
    marginTop: constants.vh(76),
    borderRadius: constants.vw(15),
    marginStart: constants.vw(70),
    resizeMode: 'cover',
    marginEnd: constants.vw(70),
  },
  headerTxt: {
    fontSize: constants.vw(24),
    fontWeight: '700',
    marginTop: constants.vh(15),
    alignSelf: 'center',
    color: constants.colors.colorPrimary,
    fontStyle: 'normal',
  },
  headerTxtSummary: {
    fontSize: constants.vw(14),
    textAlign: 'center',
    width: constants.vw(290),
    fontWeight: '400',
    marginStart: constants.vw(40),
    lineHeight: constants.vh(18),
    marginTop: constants.vh(10),
    color: constants.colors.secondary
  },
  txtParagraph: {
    position: 'absolute',
    bottom: constants.vh(210),
    width: constants.vw(335),
    alignSelf: 'center',
    color: constants.colors.secondary,
    fontWeight: 'bold',
    fontSize: constants.vw(16),
    textAlign: 'center'
  }
});

const slides = [
  {
    key: 's1',
    text: 'Users going through a vetting process to ensure you never match with bots.',
    title: 'Algorithm',
    image: constants.images.girlOne,
  },
  {
    key: 's2',
    title: 'Matches',
    text: 'We match you with people that have a large array of similar interests.',
    image: constants.images.girlTwo,
  },
  {
    key: 's3',
    title: 'Premium',
    text: 'Sign up today and enjoy the first month of premium benefits on us.',
    image: constants.images.girlThree,
  },
];

export default OnboardingScreen;