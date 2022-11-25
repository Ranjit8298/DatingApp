import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native';
import constants from "../../constants";
import CustomButton from "../../components/CustomButton";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <FlatList
        data={slides}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment="start"
        pagingEnabled
        scrollEventThrottle={16}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
        renderItem={({ item }) => (
          <View>
            <Image
              style={styles.imageStyle}
              source={item.image} />
            <Text style={styles.headerTxt}>{item.title}</Text>
            <Text style={styles.headerTxtSummary}>{item.text}</Text>
          </View>

        )}
      />

      <View style={styles.absoluteView}>
        <CustomButton onPress={() => { }} txt={constants.string.createAccount} />

        <Text style={styles.alreadyTxt}>{constants.string.alreadyHaveAnAcc}
          <Text style={styles.signInTxt}>{constants.string.signIn}</Text>
        </Text>
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
  alreadyTxt: {
    alignSelf: 'center',
    marginTop: constants.vh(20),
    fontSize: constants.vh(14),
    color: constants.colors.primary70
  },
  signInTxt: {
    color: constants.colors.colorPrimary,
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