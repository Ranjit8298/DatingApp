import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import constants from '../../constants';
import CustomSeprator from '../CustomSeprator';
import CommonFunction from '../../utils/CommonFunction';

interface props {
  messageTime: any;
  userImg: any;
  userName: any;
  messageCount: any;
  messageTxt: any;
  isOnline: any;
  onPress: Function;
}

const CustomMessageBox = (props: props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      activeOpacity={0.8}>
      <Text style={styles.messageTime}>{props.messageTime}</Text>
      <View style={styles.messageContainer}>
        <Image style={styles.userImg} source={props.userImg} />
        <View
          style={{
            marginStart: constants.vh(10),
            width: constants.vw(290),
          }}>
          <View style={styles.messageContainer}>
            <Text
              style={styles.userName}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {props.userName}
            </Text>
            {!CommonFunction.isNullUndefined(props.messageCount) && (
              <View style={styles.messageCount}>
                <Text
                  style={{
                    fontSize: 12,
                    color: constants.colors.white,
                    fontWeight: '500',
                  }}>
                  {props.messageCount}
                </Text>
              </View>
            )}
          </View>

          <Text numberOfLines={1} ellipsizeMode={'tail'}>
            {props.messageTxt}
          </Text>
        </View>
      </View>

      {props.isOnline && (
        <View style={styles.onlineTxt}>
          <Text
            style={{
              fontSize: 12,
              color: constants.colors.white,
              fontWeight: '500',
            }}>
            {'ONLINE'}
          </Text>
        </View>
      )}
      <CustomSeprator sepratorStyle={styles.sepratorStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  messageTime: {
    textAlign: 'right',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userImg: {
    width: constants.vw(60),
    height: constants.vw(60),
    borderRadius: constants.vw(30),
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: constants.colors.inputborderColor,
  },
  sepratorStyle: {
    marginTop: constants.vh(12),
    marginStart: constants.vh(5),
    backgroundColor: constants.colors.inputborderColor,
  },
  onlineTxt: {
    backgroundColor: constants.colors.dark_green,
    width: constants.vw(60),
    height: 'auto',
    borderRadius: constants.vw(20),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: constants.vh(75),
  },
  userName: {
    fontSize: constants.vw(15.5),
    fontWeight: 'bold',
  },
  messageCount: {
    width: constants.vw(20),
    height: constants.vw(20),
    borderRadius: constants.vw(10),
    backgroundColor: constants.colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: constants.vh(8),
  },
});

export default CustomMessageBox;
