import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';

interface props {
  navigation: any;
}
const InvitationScreen = (props: props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.invitations}
        messageCount={'10'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {
          props.navigation.navigate('AllMessageScreen');
        }}
        showRound={true}
        leftImg={constants.images.messageImg}
        rightImg={constants.images.menuImg}
      />
      <FlatList
        style={{padding: constants.vh(10)}}
        data={userInvitations}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.inviteContainer}>
            <View style={styles.nameImgView}>
              <Image
                resizeMode="cover"
                style={styles.userImg}
                source={item.userImg}
              />
              <View style={{width: constants.vw(125)}}>
                <Text
                  style={styles.userName}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {item.userName}
                </Text>
                <Text
                  style={{
                    ...styles.userName,
                    fontSize: constants.vw(12),
                    fontWeight: '400',
                  }}>
                  {item.requestDate}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
                style={styles.roundView}>
                {/* <Image
                  style={styles.imgStyle}
                  source={constants.images.closeImg}
                /> */}
                <Text
                  style={{color: constants.colors.white, fontWeight: '500'}}>
                  {'Reject'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  props.navigation.navigate('MutualLikeScreen', {
                    UserName: item.userName,
                    UserImg: item.userImg,
                    UserId: item.userId,
                  });
                }}
                style={{
                  ...styles.roundView,
                  marginStart: constants.vh(10),
                  backgroundColor: constants.colors.dark_green,
                }}>
                {/* <Image
                  style={{
                    ...styles.imgStyle,
                    width: constants.vw(24),
                    height: constants.vh(24),
                    resizeMode: 'cover',
                  }}
                  source={constants.images.confirmIcon}
                /> */}
                <Text
                  style={{color: constants.colors.white, fontWeight: '500'}}>
                  {'Accept'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  inviteContainer: {
    width: constants.vw(340),
    height: 'auto',
    backgroundColor: constants.colors.white,
    shadowColor: constants.colors.grey,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    alignSelf: 'center',
    borderRadius: constants.vh(15),
    borderWidth: 1,
    borderColor: constants.colors.inputborderColor,
    padding: constants.vh(15),
    marginBottom: constants.vh(15),
  },
  userImg: {
    width: constants.vw(60),
    height: constants.vw(60),
    borderRadius: constants.vw(30),
    borderWidth: 1,
    borderColor: constants.colors.inputborderColor,
  },
  nameImgView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userName: {
    marginStart: constants.vh(8),
    fontSize: constants.vw(14),
    fontWeight: '500',
  },
  roundView: {
    width: constants.vw(60),
    height: constants.vw(35),
    borderRadius: constants.vw(10),
    backgroundColor: constants.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    tintColor: constants.colors.white,
    resizeMode: 'contain',
  },
});

const userInvitations = [
  {
    userName: 'Aanand Kumar',
    userId: 'A@1',
    requestDate: 'Today',
    userImg: constants.images.manOneImg,
  },
  {
    userName: 'Sonu Kumar',
    userId: 'A@2',
    requestDate: 'Today',
    userImg: constants.images.manTwoImg,
  },
  {
    userName: 'Chandan Kumar',
    userId: 'A@3',
    requestDate: 'Tomorrow',
    userImg: constants.images.manThreeImg,
  },
  {
    userName: 'Akash Rawat',
    userId: 'A@4',
    requestDate: '12 Aug, 2022',
    userImg: constants.images.datingBgImg,
  },
  {
    userName: 'Suraj',
    userId: 'A@5',
    requestDate: '08 Aug, 2022',
    userImg: constants.images.manOneImg,
  },
  {
    userName: 'Ranjit Kumar',
    userId: 'A@6',
    requestDate: '20 Sept, 2022',
    userImg: constants.images.manTwoImg,
  },
];
export default InvitationScreen;
