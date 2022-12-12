import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomSeprator from '../../components/CustomSeprator';

interface props {
  navigation: any;
}

export const SLIDER_WIDTH = Dimensions.get('window').width + 8;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const BrowseScreen = (props: props) => {
  const renderItem = ({item}: any) => {
    return (
      <View>
        <View style={styles.sliderTopView}>
          <Image source={item.userImg} style={styles.sliderImg} />

          <Text style={styles.sliderTxt}>{item.userName}</Text>
          <CustomSeprator />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={styles.roundViewStart}>
            <Image style={styles.starImg} source={constants.images.starImg} />
          </TouchableOpacity>
          <View style={styles.likeDislikeView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {}}
              style={styles.bottomRoundView}>
              <Image
                style={{
                  ...styles.starImg,
                  width: constants.vw(40),
                  height: constants.vh(40),
                }}
                source={constants.images.closeImg}
              />
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
                ...styles.bottomRoundView,
                backgroundColor: constants.colors.colorPrimary,
              }}>
              <Image
                style={{
                  ...styles.starImg,
                  width: constants.vw(40),
                  height: constants.vh(40),
                }}
                source={constants.images.heartImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <CustomHeader
        headerTxt={constants.string.browse}
        messageCount={'25'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {
          props.navigation.navigate('AllMessageScreen');
        }}
      />

      <View style={{marginVertical: constants.vh(25)}}>
        <Carousel
          layout={'default'}
          // autoplay={true}
          // autoplayInterval={3000}
          showsVerticalScrollIndicator={false}
          loop={false}
          data={userData}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  sliderTopView: {
    backgroundColor: constants.colors.white,
    shadowColor: constants.colors.grey,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 7,
    borderWidth: 5,
    borderColor: constants.colors.inputborderColor,
    borderRadius: constants.vw(15),
    height: 'auto',
    paddingBottom: constants.vw(15),
  },
  sliderImg: {
    width: constants.vw(280),
    height: constants.vh(310),
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: constants.vw(5),
    marginTop: constants.vh(8),
  },
  sliderTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: constants.colors.navy,
    marginVertical: constants.vh(10),
  },
  roundViewStart: {
    width: constants.vw(60),
    height: constants.vw(60),
    borderRadius: constants.vw(30),
    backgroundColor: constants.colors.navy,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: constants.vh(15),
  },
  starImg: {
    tintColor: constants.colors.white,
    alignSelf: 'center',
    width: constants.vw(30),
    height: constants.vh(30),
    resizeMode: 'cover',
  },
  likeDislikeView: {
    width: constants.vw(400),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: constants.vh(20),
  },
  bottomRoundView: {
    backgroundColor: constants.colors.grey,
    width: constants.vw(80),
    height: constants.vw(80),
    borderRadius: constants.vw(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const userData = [
  {
    userImg: constants.images.manOneImg,
    userName: 'Ranjit Kumar',
    userActiveStatus: 'Active 5 minutes Ago',
    userId: 'L@1',
  },
  {
    userImg: constants.images.manTwoImg,
    userName: 'Chandan Kumar',
    userActiveStatus: 'Active 15 minutes Ago',
    userId: 'L@2',
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Aanand Kumar',
    userActiveStatus: 'Active 50 minutes Ago',
    userId: 'L@3',
  },
  {
    userImg: constants.images.manTwoImg,
    userName: 'Sonu Kumar',
    userActiveStatus: 'Active Today',
    userId: 'L@4',
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Sagar Pawar',
    userActiveStatus: 'Online',
    userId: 'L@5',
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Shivam Rawat',
    userActiveStatus: 'Online',
    userId: 'L@6',
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Suraj Adhaikari',
    userActiveStatus: 'Active 5 minutes Ago',
    userId: 'L@7',
  },
  {
    userImg: constants.images.manTwoImg,
    userName: 'Bipin',
    userActiveStatus: 'Active 55 minutes Ago',
    userId: 'L@8',
  },
  {
    userImg: constants.images.girlTwo,
    userName: 'Mansi',
    userActiveStatus: 'Online',
    userId: 'L@9g',
  },
  {
    userImg: constants.images.girlOne,
    userName: 'Simran',
    userActiveStatus: 'Online',
    userId: 'L@10g',
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Rohan',
    userActiveStatus: 'Online',
    userId: 'L@11',
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Sahib',
    userActiveStatus: 'Online',
    userId: 'L@12',
  },
];

export default BrowseScreen;
