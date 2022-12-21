import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import constants from '../../constants';

interface props {
  navigation: any;
  route: any;
}

const SingleUserMessageScreen = (props: props) => {
  const userName = props.route.params?.userName;
  const userNameMatch = props.route.params?.userNameMatch;
  const userActiveStatus = props.route.params?.userActiveStatus;
  return (
    <SafeAreaView style={styles.conatainer}>
      <View style={styles.headerView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            style={styles.arrowBackImg}
            source={constants.images.arrowBackImg}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.headerTxt}>
            {userName ? userName : userNameMatch}
          </Text>
          <Text style={styles.lastSeenTxt}>
            {userActiveStatus ? userActiveStatus : 'last seen 15m ago'}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
          <Text
            style={{
              ...styles.headerTxt,
              fontSize: constants.vw(18),
              fontWeight: '400',
            }}>
            {'Edit'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  headerView: {
    backgroundColor: constants.colors.inputborderColor,
    height: 'auto',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: constants.vw(8),
  },
  arrowBackImg: {
    width: constants.vw(25),
    height: constants.vh(25),
    resizeMode: 'contain',
    tintColor: constants.colors.colorPrimary,
  },
  headerTxt: {
    color: constants.colors.navy,
    fontSize: constants.vw(20),
    fontWeight: '500',
    textAlign: 'center',
  },
  lastSeenTxt: {
    textAlign: 'center',
    color: constants.colors.gray,
    marginTop: constants.vh(-3),
  },
});

export default SingleUserMessageScreen;
