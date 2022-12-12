import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';

interface props {
  navigation: any;
  route: any;
}

const MutualLikeScreen = (props: props) => {
  const UserName = props.route.params.UserName;
  const UserImg = props.route.params.UserImg;
  const UserId = props.route.params.UserId;
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.mutualLike}
        messageCount={'21'}
        onMenuPress={() => {}}
        onMessagePress={() => {}}
      />

      <View style={styles.cardStyle}>
        <View style={styles.userTopImgView}>
          <Image
            style={styles.userImg}
            source={
              UserId === 'L@9g' || UserId === 'L@10g'
                ? constants.images.manThreeImg
                : constants.images.girlTwo
            }
          />
          <Image style={styles.userImg} source={UserImg} />
        </View>
        <Image style={styles.heartImg} source={constants.images.heartImg} />
        <Text style={styles.matchHeader}>{constants.string.itIsMatch}</Text>
        <Text
          style={{...styles.matchHeader, fontSize: 16, textAlign: 'center'}}>
          {`You and ${UserName} like each other, you can now send him a message`}
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: constants.vh(150),
          alignSelf: 'center',
        }}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate('AllMessageScreen');
          }}
          txt={constants.string.sendMsg}
        />
        <CustomButton
          onPress={() => {props.navigation.navigate('BrowseScreen')}}
          txt={constants.string.keepBrowsing}
          btnStyle={{
            marginTop: constants.vh(20),
            backgroundColor: constants.colors.navy,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  cardStyle: {
    width: constants.vw(335),
    height: 'auto',
    backgroundColor: constants.colors.white,
    shadowColor: constants.colors.grey,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    top: constants.vh(200),
    alignSelf: 'center',
    borderRadius: constants.vh(30),
    position: 'absolute',
    borderWidth: 1.5,
    borderColor: constants.colors.inputborderColor,
    padding: constants.vw(30),
  },
  userImg: {
    width: constants.vw(100),
    height: constants.vw(100),
    borderRadius: constants.vw(50),
    resizeMode: 'contain',
    borderWidth: 1.5,
    borderColor: constants.colors.inputborderColor,
  },
  userTopImgView: {
    marginTop: constants.vh(-80),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartImg: {
    alignSelf: 'center',
    tintColor: constants.colors.colorPrimary,
    width: constants.vw(28),
    height: constants.vh(28),
    resizeMode: 'contain',
  },
  matchHeader: {
    alignSelf: 'center',
    marginTop: constants.vh(10),
    fontSize: 22,
    color: constants.colors.navy,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
});

export default MutualLikeScreen;
