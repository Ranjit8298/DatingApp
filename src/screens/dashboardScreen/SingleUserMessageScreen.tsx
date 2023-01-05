import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
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
import firestore from '@react-native-firebase/firestore';

interface props {
  navigation: any;
  route: any;
  saveUserMessage: any;
  saveUserMessageData: any;
  saveSingleUserDetails: any;
  mode: any;
  saveSingleUserSignUpDetails: any;
}

const SingleUserMessageScreen = (props: props) => {
  const [messages, setMessages] = useState<any[]>([]);

  const userMessageName = props.route.params?.userMessageName;
  const userMessageImg = props.route.params?.userMessageImg;
  const userMessageId = props.route.params?.userMessageId;
  const userMsgFileExt = props.route.params?.userMsgFileExt;

  const userNameMatch = props.route.params?.userNameMatch;
  const userImgMatch = props.route.params?.userImgMatch;
  const userIdMatch = props.route.params?.userIdMatch;
  const userMatchFileExt = props.route.params?.userMatchFileExt;

  const {userFirstName, userProfileImg, fileExt, userId} =
    props.saveSingleUserDetails;
  const signupUserId = props.saveSingleUserSignUpDetails[0]?.userId;

  const myUserId = props.mode === 'login' ? userId : signupUserId;
  const receiverUerId = userMessageId ? userMessageId : userIdMatch;

  console.log('messages===>',messages);
  const getAllMessages = async () => {
    const chatid =
      receiverUerId > myUserId
        ? myUserId + '-' + receiverUerId
        : receiverUerId + '-' + myUserId;

    const msgResponse = await firestore()
      .collection('chats_room')
      .doc(chatid)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get();
    const allTheMsgs = msgResponse.docs.map(docSanp => {
      return {
        ...docSanp.data(),
        createdAt: docSanp.data().createdAt.toDate(),
      };
    });
    setMessages(allTheMsgs);
  };
  useEffect(() => {
    getAllMessages();
  }, []);

  const onSend = (msgArray: any) => {
    const msg = msgArray[0];
    const usermsg = {
      ...msg,
      sentBy: myUserId,
      sentTo: receiverUerId,
      createdAt: new Date(),
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, usermsg),
    );
    const chatid =
      receiverUerId > myUserId
        ? myUserId + '-' + receiverUerId
        : receiverUerId + '-' + myUserId;
    firestore()
      .collection('chats_room')
      .doc(chatid)
      .collection('messages')
      .add({...usermsg, createdAt: firestore.FieldValue.serverTimestamp()});
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
            {userMessageName ? userMessageName : userNameMatch}
          </Text>
          <Text style={styles.lastSeenTxt}>{'Online'}</Text>
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
        infiniteScroll={false}
        textInputProps={{multiline: false, paddingTop: 8}}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: myUserId,
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
  mode: state.auth.saveMode,
  saveSingleUserSignUpDetails: state.auth.saveSingleUserSignUpDetails,
});

const mapDispatchToProps = {
  saveUserMessage: (data: any) => saveUserMessage(data),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleUserMessageScreen);
