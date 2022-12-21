import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import constants from '../../constants';

interface props {
  headerTxt: any;
  userTxt?: any;
  messageCount: any;
  onMenuPress: any;
  onMessagePress: any;
  headerTxtStyle?: any;
  showRound?: any;
  leftImg: any;
  rightImg: any;
}

const CustomHeader = (props: props) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.onMenuPress();
        }}>
        <Image style={styles.menuIcon} source={props.rightImg} />
      </TouchableOpacity>

      <View>
        <Text
          style={[styles.headerTxt, props.headerTxtStyle]}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          {props.headerTxt}
        </Text>
        {props.userTxt && <Text style={styles.userTxt}>{props.userTxt}</Text>}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.onMessagePress();
        }}>
        <Image
          style={{
            ...styles.menuIcon,
            tintColor: constants.colors.navy,
            width: constants.vw(25),
            height: constants.vh(25),
          }}
          source={props.leftImg}
        />
        {props.showRound && (
          <View style={styles.messageRoundView}>
            <Text style={styles.messageTxt}>{props.messageCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: constants.colors.inputborderColor,
    height: 'auto',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: constants.vw(10),
  },
  menuIcon: {
    tintColor: constants.colors.colorPrimary,
    resizeMode: 'contain',
    width: constants.vw(28),
    height: constants.vh(28),
  },
  headerTxt: {
    fontSize: constants.vh(20),
    fontWeight: '500',
    color: constants.colors.navy,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  messageRoundView: {
    width: constants.vw(16),
    height: constants.vw(16),
    borderRadius: constants.vw(8),
    backgroundColor: constants.colors.colorPrimary,
    position: 'absolute',
    top: constants.vh(-10),
    end: constants.vh(0),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageTxt: {
    color: constants.colors.white,
    fontSize: 12,
    alignSelf: 'center',
  },
  userTxt: {
    alignSelf: 'center',
    color: constants.colors.colorPrimary,
  },
});
export default CustomHeader;
