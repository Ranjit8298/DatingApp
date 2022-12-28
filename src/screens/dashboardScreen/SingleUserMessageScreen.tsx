import React, {useState, useCallback, useEffect} from 'react';
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
import {Bubble, GiftedChat, InputToolbar} from 'react-native-gifted-chat';

interface props {
  navigation: any;
  route: any;
  saveUserMessage: any;
  saveUserMessageData: any;
  saveSingleUserDetails: any;
}

const SingleUserMessageScreen = (props: props) => {
  const [messages, setMessages] = useState<any[]>([]);

  const userName = props.route.params?.userName;
  const userImg = props.route.params?.userImg;
  const userNameMatch = props.route.params?.userNameMatch;
  const userActiveStatus = props.route.params?.userActiveStatus;

  const {userFirstName, userProfileImg, fileExt, userId} =
    props.saveSingleUserDetails;

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
    const messageData = {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: userName,
        avatar: userImg,
      },
    };

    setMessages([messageData]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

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
              fontSize: constants.vw(16),
              fontWeight: '400',
            }}>
            {'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        isTyping={false}
        textInputProps={{multiline: true,paddingTop:8}}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: constants.colors.colorPrimary,
                },
              }}
            />
          );
        }}
        // renderInputToolbar={props => {
        //   return (
        //     <InputToolbar
        //       {...props}
        //       containerStyle={{
        //         borderTopWidth: 1.5,
        //         borderTopColor: constants.colors.border1,
        //       }}
        //     />
        //   );
        // }}
      />
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
    fontSize: constants.vw(18),
    fontWeight: '500',
    textAlign: 'center',
  },
  lastSeenTxt: {
    textAlign: 'center',
    color: constants.colors.gray,
    marginTop: constants.vh(-3),
  },
});

const mapStateToProps = (state: any) => ({
  saveUserMessageData: state.dashboard.saveUserMessage,
  saveSingleUserDetails: state.auth.saveSingleUserDetails,
});

const mapDispatchToProps = {
  saveUserMessage: (data: any) => saveUserMessage(data),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleUserMessageScreen);
