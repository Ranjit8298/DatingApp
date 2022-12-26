import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import constants from '../../constants';
import {connect} from 'react-redux';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {saveUserMessage} from '../../modules/dashboard';

interface props {
  navigation: any;
  route: any;
  saveUserMessage: any;
  saveUserMessageData: any;
}

const SingleUserMessageScreen = (props: props) => {
  const [message, setMessage] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const flatListRef = React.useRef(null);

  const userName = props.route.params?.userName;
  const userNameMatch = props.route.params?.userNameMatch;
  const userActiveStatus = props.route.params?.userActiveStatus;

  const normalizeSpaces = (value: string) => {
    return value.replace(/^\s+/g, '');
  };

  const toggleSenderAction = (val: any) => {
    if (val.length > 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const saveMessage = () => {
    let messageData = {
      message: message,
      message_id: uuidv4(),
      messageTime: new Date().toLocaleTimeString(),
    };

    props.saveUserMessage(messageData);
  };

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

      <FlatList
        data={props.saveUserMessageData}
        ref={flatListRef}
        onContentSizeChange={() => {
          flatListRef.current.scrollToEnd({animation: true});
        }}
        contentContainerStyle={{
          margin: constants.vh(10),
          paddingBottom: constants.vw(65),
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{padding: constants.vw(4)}}>
            {/* <Image style={styles.userImg} source={userImg} /> */}
            <Text style={styles.messageData}>{item.message}</Text>
            <Text
              style={{
                textAlign: 'right',
              }}>
              {item.messageTime}
            </Text>
          </View>
        )}
      />
      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            value={message}
            onChangeText={(val: any) => {
              setMessage(normalizeSpaces(val));
              toggleSenderAction(val);
            }}
          />
          <View style={{justifyContent: 'center'}}>
            {toggle === true ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setMessage('');
                    setToggle(false);
                  }}>
                  <Image
                    style={{
                      width: constants.vw(14),
                      height: constants.vh(14),
                      tintColor: constants.colors.red,
                      resizeMode: 'cover',
                    }}
                    source={constants.images.removeIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sendView}
                  activeOpacity={0.8}
                  onPress={() => {
                    saveMessage();
                    setMessage('');
                  }}>
                  <Text
                    style={{
                      color: constants.colors.navy,
                      fontWeight: 'bold',
                      fontSize: constants.vw(14.5),
                    }}>
                    {'SEND'}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <Image
                    style={styles.imageAction}
                    source={constants.images.imageIcon}
                  />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onLongPress={() => {}}>
                  <Image
                    style={{
                      ...styles.imageAction,
                      marginStart: constants.vh(20),
                      width: constants.vw(23),
                      height: constants.vh(23),
                    }}
                    source={constants.images.voiceIcon}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
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
  bottomView: {
    width: constants.vw(375),
    height: constants.vh(55),
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: constants.colors.border1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.colors.white,
  },
  textInput: {
    width: constants.vw(280),
    height: constants.vh(45),
    alignSelf: 'center',
  },
  sendView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: constants.vw(10),
  },
  imageAction: {
    width: constants.vw(25),
    height: constants.vh(25),
    resizeMode: 'contain',
  },
  // flatlistItemView: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   width: constants.vw(290),
  //   height: 'auto',
  //   alignSelf: 'flex-end',
  //   padding: constants.vw(10),
  // },
  // userImg: {
  //   width: constants.vw(40),
  //   height: constants.vw(40),
  //   borderRadius: constants.vw(20),
  //   resizeMode: 'cover',
  //   borderWidth: 1.5,
  //   borderColor: constants.colors.inputborderColor,
  // },
  messageData: {
    maxWidth: constants.vw(250),
    width: 'auto',
    height: 'auto',
    backgroundColor: constants.colors.colorPrimary,
    color: constants.colors.white,
    fontSize: constants.vw(14.5),
    padding: constants.vw(8),
    borderRadius: constants.vh(25),
    marginStart: constants.vh(8),
    textAlign: 'justify',
    alignSelf: 'flex-end',
  },
});

const mapStateToProps = (state: any) => ({
  saveUserMessageData: state.dashboard.saveUserMessage,
});

const mapDispatchToProps = {
  saveUserMessage: (data: any) => saveUserMessage(data),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleUserMessageScreen);
