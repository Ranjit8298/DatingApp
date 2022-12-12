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
}

const DashboardScreen = (props: props) => {
  const [location, setLoaction] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(userData);
    setMasterDataSource(userData);
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.dashboard}
        messageCount={'99'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {
          props.navigation.navigate('AllMessageScreen');
        }}
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
        ListEmptyComponent={() => {
          return (
            <View>
              <Image
                style={styles.noDataImg}
                source={constants.images.noDataImg}
              />
            </View>
          );
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              {
                props.navigation.navigate('MatchesUserScreen')
              }
            }}
            style={styles.itemView}>
            <Image style={styles.locationImg} source={item.locationImg} />
            <Text style={styles.locationName}>{item.locationName}</Text>
            <Text
              style={{
                ...styles.locationName,
                fontSize: 16,
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
    width: constants.vw(177.5),
    height: constants.vh(160),
    borderRadius: constants.vw(5),
    resizeMode: 'contain',
  },
  itemView: {
    padding: constants.vw(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  locationName: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    color: constants.colors.navy,
  },
  noDataImg: {
    width: constants.vw(300),
    height: constants.vh(300),
    alignSelf: 'center',
    marginTop: constants.vh(200),
    resizeMode: 'contain',
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

export default DashboardScreen;
