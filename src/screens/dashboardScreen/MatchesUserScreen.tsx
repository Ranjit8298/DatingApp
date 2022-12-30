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
import {connect} from 'react-redux';

interface props {
  navigation: any;
  route: any;
  mode: any;
  filterLoginUserData: any;
  filtersignupUserData: any;
}

const MatchesUserScreen = (props: props) => {
  const [location, setLoaction] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState<any[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<any[]>([]);

  const liveUserCount = props.route.params?.userLiveCount;

  console.log('props.mode==>', props.mode);
  console.log('props.filterLoginUserData==>', props.filterLoginUserData);
  console.log('props.filtersignupUserData==>', props.filtersignupUserData);

  useEffect(() => {
    setFilteredDataSource(
      props.mode === 'login'
        ? props.filterLoginUserData
        : props.filtersignupUserData,
    );
    setMasterDataSource(
      props.mode === 'login'
        ? props.filterLoginUserData
        : props.filtersignupUserData,
    );
  }, []);

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.userFirstName
          ? item.userFirstName.toUpperCase()
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
        // contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
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
                  userNameMatch: item.userFirstName,
                  userImgMatch: item.userProfileImg,
                  userIdMatch: item.userId,
                  userMatchFileExt: item.fileExt,
                });
              }
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.locationImg}
                source={{
                  uri: `data:${item.fileExt};base64,${item.userProfileImg}`,
                }}
              />
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

            <Text style={styles.locationName}>{item.userFirstName}</Text>
            <Text
              style={{
                ...styles.locationName,
                fontSize: constants.vw(14),
                color: constants.colors.grey,
              }}>
              {'Online'}
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
    width: constants.vw(128),
    height: constants.vw(128),
    borderRadius: constants.vw(64),
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: constants.colors.inputborderColor,
  },
  itemView: {
    padding: constants.vw(10),
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center',
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

const mapStateToProps = (state: any) => ({
  mode: state.auth.saveMode,
  filterLoginUserData: state.dashboard.filterLoginUserData,
  filtersignupUserData: state.dashboard.filtersignupUserData,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MatchesUserScreen);
