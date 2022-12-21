import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomSearchBox from '../../components/CustomSearchBox';
import constants from '../../constants';

interface props {
  navigation: any;
  route: any;
}

const MatchesUserScreen = (props: props) => {
  const [location, setLoaction] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState<any[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<any[]>([]);

  const liveUserCount = props.route.params?.userLiveCount;

  useEffect(() => {
    setFilteredDataSource(userData);
    setMasterDataSource(userData);
  }, []);

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.userName
          ? item.userName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setLoaction(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setLoaction(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.matches}
        messageCount={'10'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {
          props.navigation.navigate('AllMessageScreen');
        }}
        userTxt={liveUserCount}
        showRound={true}
        leftImg={constants.images.messageImg}
        rightImg={constants.images.menuImg}
      />

      <CustomSearchBox
        value={location}
        placeholder={'Search by username'}
        onChangeText={(val: any) => {
          searchFilterFunction(val);
        }}
        keyboardType={'default'}
        returnKeyType={'done'}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignSelf: 'center', justifyContent:'center'}}
        data={filteredDataSource}
        numColumns={2}
        ListEmptyComponent={() => {
          return (
            <View style={{justifyContent: 'center'}}>
              <Image
                style={styles.noDataImg}
                source={constants.images.noDataImg}
              />
              <Text
                style={
                  styles.noMsgTxt
                }>{`You do not have any matches user.`}</Text>
            </View>
          );
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemView}
            activeOpacity={0.8}
            onPress={() => {
              {
                props.navigation.navigate('SingleUserMessageScreen', {
                  userNameMatch: item.userName,
                  userImgMatch: item.userImg,
                  userActiveStatus: item.userActiveStatus,
                });
              }
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.locationImg} source={item.userImg} />
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Image
                  style={{
                    marginStart: constants.vh(-40),
                    width: constants.vw(25),
                    height: constants.vh(25),
                  }}
                  source={constants.images.cancelImg}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.locationName}>{item.userName}</Text>
            <Text
              style={{
                ...styles.locationName,
                fontSize: constants.vw(14),
                color: constants.colors.grey,
              }}>
              {item.userActiveStatus}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.white,
    flex: 1,
  },
  locationImg: {
    width: constants.vw(120),
    height: constants.vh(120),
    borderRadius: constants.vw(60),
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: constants.colors.inputborderColor,
  },
  itemView: {
    padding: constants.vw(15),
    alignSelf: 'center',
    justifyContent: 'center',
    width:'50%',
    alignItems:'center'
  },
  locationName: {
    fontSize: constants.vw(16.5),
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    color: constants.colors.navy,
  },
  noDataImg: {
    width: constants.vw(300),
    height: constants.vh(300),
    alignSelf: 'center',
    marginTop: constants.vh(140),
    resizeMode: 'contain',
  },
  noMsgTxt: {
    fontSize: constants.vw(15),
    color: constants.colors.grey,
    alignSelf: 'center',
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
    userImg: constants.images.manThreeImg,
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
    userImg: constants.images.manThreeImg,
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
    userImg: constants.images.manOneImg,
    userName: 'Bipin',
    userActiveStatus: 'Active 55 minutes Ago',
    userId: 'L@8',
  },
  {
    userImg: constants.images.girlTwo,
    userName: 'Mansi',
    userActiveStatus: 'Online',
    userId: 'L@9',
  },
  {
    userImg: constants.images.girlOne,
    userName: 'Simran',
    userActiveStatus: 'Online',
    userId: 'L@10',
  },
  {
    userImg: constants.images.manThreeImg,
    userName: 'Rohan',
    userActiveStatus: 'Online',
    userId: 'L@11',
  },
];

export default MatchesUserScreen;
