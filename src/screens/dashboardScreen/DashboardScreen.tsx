import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomSearchBox from '../../components/CustomSearchBox';
import constants from '../../constants';
import {connect} from 'react-redux';
import {firebase} from '@react-native-firebase/database';
import {saveUserDetails, saveSingleUserDetails} from '../../modules/auth';

interface props {
  navigation: any;
  route: any;
  saveCurrentAddress: any;
  mode: any;
  mobileNumber: any;
  saveSingleUserDetails: any;
  saveUserDetails: any;
  saveUserDetailsData: any;
}

const DashboardScreen = (props: props) => {
  const [location, setLoaction] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState<any[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<any[]>([]);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
    getDataFromFirebase();
    signUpUserDetails();

    setFilteredDataSource(userData);
    setMasterDataSource(userData);
  }, []);

  const getDataFromFirebase = () => {
    firebase
      .database()
      .ref()
      .on('value', snapshot => {
        let responselist = snapshot.val();
        props.saveUserDetails(Object.values(responselist));
      });
  };

  const signUpUserDetails = () => {
    props.saveUserDetailsData.map((user: any) => {
      if (user.userMobileNumber === props.mobileNumber) {
        props.saveSingleUserDetails(user);
      }
    });
  };

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.locationName
          ? item.locationName.toUpperCase()
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

  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={props.saveCurrentAddress}
        messageCount={'99'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {
          props.navigation.navigate('AllMessageScreen');
        }}
        headerTxtStyle={styles.headerTxtStyle}
        showRound={true}
        leftImg={constants.images.messageImg}
        rightImg={constants.images.menuImg}
      />

      <CustomSearchBox
        value={location}
        placeholder={'Search Loaction'}
        onChangeText={(val: any) => {
          searchFilterFunction(val);
        }}
        keyboardType={'default'}
        returnKeyType={'done'}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredDataSource}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={onRefresh}
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
                }>{`You do not have any matches place.`}</Text>
            </View>
          );
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              {
                props.navigation.navigate('MatchesUserScreen', {
                  userLiveCount: item.locationActiveUser,
                });
              }
            }}
            style={styles.itemView}>
            <Image style={styles.locationImg} source={item.locationImg} />
            <Text style={styles.locationName}>{item.locationName}</Text>
            <Text
              style={{
                ...styles.locationName,
                fontSize: constants.vw(14),
                color: constants.colors.colorPrimary,
              }}>
              {item.locationActiveUser}
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
    width: constants.vw(160),
    height: constants.vh(145),
    borderRadius: constants.vw(2),
    resizeMode: 'cover',
  },
  itemView: {
    padding: constants.vw(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
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
  headerTxtStyle: {
    fontSize: constants.vw(12),
    textAlign: 'center',
    marginStart: constants.vh(10),
    marginEnd: constants.vh(10),
    maxWidth: constants.vw(225),
  },
  noMsgTxt: {
    fontSize: constants.vw(15),
    color: constants.colors.grey,
    alignSelf: 'center',
  },
});

const userData = [
  {
    locationImg: constants.images.restaurantImg_1,
    locationName: 'House of Common',
    locationActiveUser: '25 Users Live',
    locationId: 'L@1',
  },
  {
    locationImg: constants.images.restaurantImg_2,
    locationName: 'Social Hangout',
    locationActiveUser: '20 Users Live',
    locationId: 'L@2',
  },
  {
    locationImg: constants.images.restaurantImg_3,
    locationName: 'Brew Works',
    locationActiveUser: '50 Users Live',
    locationId: 'L@3',
  },
  {
    locationImg: constants.images.restaurantImg_4,
    locationName: 'Social Hangout',
    locationActiveUser: '57 Users Live',
    locationId: 'L@4',
  },
  {
    locationImg: constants.images.restaurantImg_3,
    locationName: 'Sherlock Brew',
    locationActiveUser: '30 Users Live',
    locationId: 'L@5',
  },
  {
    locationImg: constants.images.restaurantImg_2,
    locationName: 'Sandal Suit',
    locationActiveUser: '12 Users Live',
    locationId: 'L@6',
  },
  {
    locationImg: constants.images.restaurantImg_1,
    locationName: 'Lemon Tree',
    locationActiveUser: '15 Users Live',
    locationId: 'L@7',
  },
  {
    locationImg: constants.images.restaurantImg_4,
    locationName: 'House of Common',
    locationActiveUser: '55 Users Live',
    locationId: 'L@8',
  },
  {
    locationImg: constants.images.restaurantImg_2,
    locationName: 'House of Food',
    locationActiveUser: '70 Users Live',
    locationId: 'L@9',
  },
  {
    locationImg: constants.images.restaurantImg_1,
    locationName: 'House of Common',
    locationActiveUser: '05 Users Live',
    locationId: 'L@10',
  },
];

const mapStateToProps = (state: any) => ({
  saveCurrentAddress: state.auth.saveCurrentAddress,
  mode: state.auth.saveMode,
  mobileNumber: state.auth.saveMobileNumber,
  saveUserDetailsData: state.auth.saveUserDetails,
});

const mapDispatchToProps = {
  saveSingleUserDetails: (data: any) => saveSingleUserDetails(data),
  saveUserDetails: (data: any) => saveUserDetails(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
