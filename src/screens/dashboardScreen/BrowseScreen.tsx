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

interface props {
  navigation: any;
}

export const SLIDER_WIDTH = Dimensions.get('window').width + 9;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const BrowseScreen = (props: props) => {
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(false);
  const [nope, setNope] = useState(false);
  const ref = React.useRef();

  const likeAction = () => {
    if (like === false) {
      setLike(true);
    }
  };

  const nopeAction = () => {
    if (nope === false) {
      setNope(true);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <ImageBackground
        source={item.userImg}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{borderRadius: constants.vw(15)}}>
        <View style={styles.bottomView}>
          <Text style={styles.userName}>
            {item.userName}{' '}
            <Text
              style={{
                ...styles.userName,
                fontSize: constants.vw(16),
                textAlign: 'center',
              }}>
              {item.userAge}
            </Text>
          </Text>

          {item.isOnline && (
            <View style={styles.subTxtView}>
              <View style={styles.onlineView} />
              <Text
                style={{
                  color: constants.colors.white,
                  marginStart: constants.vh(5),
                }}>
                {'online now'}
              </Text>
            </View>
          )}

          <View style={{...styles.subTxtView, marginTop: constants.vh(5)}}>
            <Image
              style={{tintColor: constants.colors.white, resizeMode: 'contain'}}
              source={constants.images.locationIcon}
            />
            <Text
              style={{
                color: constants.colors.white,
                marginStart: constants.vh(3),
              }}>
              {item.userDistance}
            </Text>
          </View>

          <View style={{...styles.subTxtView, marginTop: constants.vh(5)}}>
            <Image
              style={{tintColor: constants.colors.white, resizeMode: 'contain'}}
              source={constants.images.homeIcon}
            />
            <Text
              style={{
                color: constants.colors.white,
                marginStart: constants.vh(4),
              }}>
              {item.userLocation}
            </Text>
          </View>

          <View style={styles.btnActionView}>
            <TouchableOpacity
              style={styles.roundView}
              onPress={() => {
                ref.current?.snapToNext?.();
              }}
              activeOpacity={0.3}>
              <Image
                style={styles.roundViewImg}
                source={constants.images.closeImg}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                ref.current?.snapToNext?.();
              }}
              activeOpacity={0.3}
              style={{
                ...styles.roundView,
                width: constants.vw(60),
                height: constants.vw(60),
                borderRadius: constants.vw(30),
                backgroundColor: constants.colors.colorPrimary,
                marginTop: constants.vh(-15),
              }}>
              <Image
                style={{
                  ...styles.roundViewImg,
                  tintColor: constants.colors.white,
                  width: constants.vw(30),
                  height: constants.vh(30),
                  resizeMode: 'cover',
                }}
                source={constants.images.heartImg}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                ref.current?.snapToNext?.();
              }}
              activeOpacity={0.3}
              style={{
                ...styles.roundView,
                backgroundColor: constants.colors.dark_blue,
              }}>
              <Image
                style={{
                  ...styles.roundViewImg,
                  tintColor: constants.colors.white,
                  width: constants.vw(25),
                  height: constants.vh(25),
                  resizeMode: 'cover',
                }}
                source={constants.images.starImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
          props.navigation.navigate('FilterModal');
        }}
        leftImg={constants.images.filterIcon}
        rightImg={constants.images.menuImg}
      />

      <View style={{marginVertical: constants.vh(25)}}>
        <Carousel
          ref={ref}
          layout={'default'}
          showsVerticalScrollIndicator={false}
          loop={true}
          data={userData}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: constants.colors.black,
  },
  image: {
    justifyContent: 'center',
    height: constants.vh(700),
    backgroundColor: constants.colors.black,
  },
  bottomView: {
    width: '100%',
    height: 'auto',
    backgroundColor: constants.colors.black,
    position: 'absolute',
    bottom: 0,
    borderBottomStartRadius: constants.vw(15),
    borderBottomEndRadius: constants.vw(15),
    opacity: 0.6,
    padding: constants.vw(10),
    backfaceVisibility: 'hidden',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: constants.vw(24),
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
  subTxtView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  onlineView: {
    width: constants.vw(12),
    height: constants.vw(12),
    borderRadius: constants.vw(6),
    backgroundColor: '#00FF00',
    marginStart: constants.vh(3),
  },
  btnActionView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: constants.vh(20),
  },
  roundView: {
    width: constants.vw(50),
    height: constants.vw(50),
    borderRadius: constants.vw(25),
    backgroundColor: constants.colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundViewImg: {
    resizeMode: 'contain',
  },
});

const userData = [
  {
    userImg: constants.images.manOneImg,
    userName: 'Ranjit Kumar',
    userActiveStatus: 'Active 5 minutes Ago',
    userId: 'L@1',
    userAge: '23',
    userDistance: '15 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: true,
  },
  {
    userImg: constants.images.datingBgImg,
    userName: 'Chandan Kumar',
    userActiveStatus: 'Active 15 minutes Ago',
    userId: 'L@2',
    userAge: '26',
    userDistance: '05 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Aanand Kumar',
    userActiveStatus: 'Active 50 minutes Ago',
    userId: 'L@3',
    userAge: '24',
    userDistance: '11 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.manTwoImg,
    userName: 'Sonu Kumar',
    userActiveStatus: 'Active Today',
    userId: 'L@4',
    userAge: '22',
    userDistance: '20 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: true,
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Sagar Pawar',
    userActiveStatus: 'Online',
    userId: 'L@5',
    userAge: '27',
    userDistance: '13 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Shivam Rawat',
    userActiveStatus: 'Online',
    userId: 'L@6',
    userAge: '26',
    userDistance: '08 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: true,
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Suraj Adhaikari',
    userActiveStatus: 'Active 5 minutes Ago',
    userId: 'L@7',
    userAge: '25',
    userDistance: '10 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.datingBgImg,
    userName: 'Bipin',
    userActiveStatus: 'Active 55 minutes Ago',
    userId: 'L@8',
    userAge: '26',
    userDistance: '01 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.girlTwo,
    userName: 'Mansi',
    userActiveStatus: 'Online',
    userId: 'L@9g',
    userAge: '27',
    userDistance: '03 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: true,
  },
  {
    userImg: constants.images.girlOne,
    userName: 'Simran',
    userActiveStatus: 'Online',
    userId: 'L@10g',
    userAge: '22',
    userDistance: '06 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: true,
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Rohan',
    userActiveStatus: 'Online',
    userId: 'L@11',
    userAge: '23',
    userDistance: '03 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
  {
    userImg: constants.images.manOneImg,
    userName: 'Sahib',
    userActiveStatus: 'Online',
    userId: 'L@12',
    userAge: '24',
    userDistance: '02 km away',
    userLocation: 'Lives in Dehradun',
    isOnline: false,
  },
];

export default BrowseScreen;
