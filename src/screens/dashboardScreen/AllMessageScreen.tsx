import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';
import CustomSearchBox from '../../components/CustomSearchBox';
import CustomMessageBox from '../../components/CustomMessageBox';
import {connect} from 'react-redux';
interface props {
  navigation: any;
  mode: any;
  filterLoginUserData: any;
  filtersignupUserData: any;
}

const AllMessageScreen = (props: props) => {
  const [message, setMessage] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState<any[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<any[]>([]);
  const [refreshing, setrefreshing] = useState(false);

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
      setMessage(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setMessage(text);
    }
  };

  // const LeftSwipeActions = (item: any) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       onPress={() => {
  //         console.log(item);
  //       }}
  //       style={styles.swipeView}>
  //       <Image
  //         style={{tintColor: constants.colors.navy}}
  //         source={constants.images.archiveIcon}
  //       />
  //       <Text style={{color: constants.colors.navy}}>{'Archive'}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  // const rightSwipeActions = (item: any) => {
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       onPress={() => {
  //         console.log(item);
  //       }}
  //       style={{
  //         ...styles.swipeView,
  //         marginStart: constants.vh(5),
  //         marginEnd: constants.vh(0),
  //         borderColor: constants.colors.colorPrimary,
  //       }}>
  //       <Image
  //         style={{tintColor: constants.colors.colorPrimary}}
  //         source={constants.images.blockIcon}
  //       />
  //       <Text style={{color: constants.colors.colorPrimary}}>{'Block'}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  
  const onRefresh = () => {
    setrefreshing(true);
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
    setTimeout(() => {
      setrefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.messages}
        messageCount={'16'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {}}
        leftImg={constants.images.messageImg}
        rightImg={constants.images.menuImg}
        showRound={true}
      />

      <CustomSearchBox
        value={message}
        placeholder={'Search by name'}
        onChangeText={(val: any) => {
          searchFilterFunction(val);
        }}
        keyboardType={'default'}
        returnKeyType={'done'}
      />
      <FlatList
        style={{padding: constants.vh(10)}}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{paddingBottom: constants.vh(18)}}
        data={filteredDataSource}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={{justifyContent: 'center'}}>
              <Image
                style={styles.noDataImg}
                source={constants.images.noMessageImg}
              />
              <Text
                style={
                  styles.noMsgTxt
                }>{`You do not have any matches user.`}</Text>
            </View>
          );
        }}
        renderItem={({item, index}) => (
          <CustomMessageBox
            messageTime={'11:40 AM'}
            userImg={item.userProfileImg}
            userName={item.userFirstName}
            messageCount={'05'}
            messageTxt={'Where are you?'}
            isOnline={true}
            fileExt={item.fileExt}
            onPress={() => {
              props.navigation.navigate('SingleUserMessageScreen', {
                userMessageName: item.userFirstName,
                userMessageImg: item.userProfileImg,
                userMessageId: item.userId,
                userMsgFileExt: item.fileExt,
              });
            }}
          />
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
  btnStyle: {
    width: constants.vw(60),
  },
  swipeView: {
    backgroundColor: constants.colors.lightGrey,
    borderWidth: 1,
    borderColor: constants.colors.navy,
    justifyContent: 'center',
    alignItems: 'center',
    padding: constants.vw(8),
    borderRadius: constants.vw(5),
    marginEnd: constants.vh(5),
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    height: constants.vh(60),
    alignSelf: 'center',
  },
});

const userData = [
  {
    userName: 'Aanand Kumar',
    userId: 'A@1',
    messageTime: '09:40pm',
    isOnline: true,
    messageTxt: 'Hey! Should I buy you drink ??',
    userImg: constants.images.manOneImg,
  },
  {
    userName: 'Sonu Kumar',
    userId: 'A@2',
    messageTime: '09:10pm',
    isOnline: false,
    messageTxt: 'Where are you from?',
    messageCount: '7',
    userImg: constants.images.manTwoImg,
  },
  {
    userName: 'Chandan Kumar',
    userId: 'A@3',
    messageTime: '09:05pm',
    isOnline: true,
    messageTxt: 'Hello!:)',
    userImg: constants.images.manThreeImg,
  },
  {
    userName: 'Akash Rawat',
    userId: 'A@4',
    messageTime: '08:40pm',
    isOnline: false,
    messageTxt: 'Nice smile!',
    userImg: constants.images.datingBgImg,
  },
  {
    userName: 'Suraj',
    userId: 'A@5',
    messageTime: '09:40pm',
    isOnline: false,
    messageTxt: 'Hey! Should I buy you drink ??',
    userImg: constants.images.manOneImg,
  },
  {
    userName: 'Ranjit Kumar',
    userId: 'A@6',
    messageTime: '09:40pm',
    isOnline: false,
    messageTxt: 'okay bye',
    messageCount: '3',
    userImg: constants.images.manTwoImg,
  },
  {
    userName: 'Jack',
    userId: 'A@7',
    messageTime: '18 Dec, 2022',
    isOnline: true,
    messageTxt: 'Hello Ranjit!:)',
    messageCount: '2',
    userImg: constants.images.manThreeImg,
  },
  {
    userName: 'Harry',
    userId: 'A@8',
    messageTime: '18 Dec, 2022',
    isOnline: false,
    messageTxt: 'Hii, This is Harry.',
    userImg: constants.images.girlOne,
  },
];

const mapStateToProps = (state: any) => ({
  mode: state.auth.saveMode,
  filterLoginUserData: state.dashboard.filterLoginUserData,
  filtersignupUserData: state.dashboard.filtersignupUserData,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AllMessageScreen);
