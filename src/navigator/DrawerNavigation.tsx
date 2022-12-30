import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DashboardScreen from '../screens/dashboardScreen/DashboardScreen';
import constants from '../constants';
import QRCodeScannerScreen from '../screens/dashboardScreen/QrCodeScanerScreen';
import MatchesUserScreen from '../screens/dashboardScreen/MatchesUserScreen';
import BrowseScreen from '../screens/dashboardScreen/BrowseScreen';
import SettingsScreen from '../screens/dashboardScreen/SettingsScreen';
import AllMessageScreen from '../screens/dashboardScreen/AllMessageScreen';
import InvitationScreen from '../screens/dashboardScreen/InvitationScreen';
import MutualLikeScreen from '../screens/dashboardScreen/MutualLikeScreen';
import {connect} from 'react-redux';

const Drawer = createDrawerNavigator();

interface props {
  saveSingleUserDetails: any;
  saveSingleUserSignUpDetails: any;
  mode: any;
}

const DrawerNavigation = (props: props) => {
  const {userFirstName, userProfileImg, fileExt} = props.saveSingleUserDetails;
  const userFirstNameSign = props.saveSingleUserSignUpDetails[0]?.userFirstName;
  const userProfileImgSign = props.saveSingleUserSignUpDetails[0]?.userProfileImg;
  const userfileExt = props.saveSingleUserSignUpDetails[0]?.fileExt;
  const CustomDrawerContent = (props: any) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              marginTop: constants.vh(10),
              marginBottom: constants.vh(10),
            }}>
            <Image
              style={styles.userImg}
              source={{
                uri: userProfileImg
                  ? `data:${fileExt};base64,${userProfileImg}`
                  : `data:${userfileExt};base64,${userProfileImgSign}`,
              }}
            />
            <Text
              style={{
                ...styles.bottomTxt,
                color: constants.colors.navy,
                alignSelf: 'center',
                marginTop: constants.vh(8),
                fontWeight: '400',
                letterSpacing: 0.3,
              }}>
              {userFirstName ? userFirstName : userFirstNameSign}
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <Text
                style={{
                  ...styles.bottomTxt,
                  color: constants.colors.colorPrimary,
                  marginTop: constants.vh(10),
                  alignSelf: 'center',
                }}>
                {'EDIT PROFILE'}
              </Text>
            </TouchableOpacity>

            <View style={styles.seprator} />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('LoginScreen');
          }}
          style={styles.bottomStyle}>
          <Text style={styles.bottomTxt}>{'LOGOUT'}</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="DashboardScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: constants.colors.colorPrimary,
        drawerActiveTintColor: constants.colors.white,
        drawerInactiveTintColor: constants.colors.navy,
        drawerStyle: {
          backgroundColor: constants.colors.white,
          width: constants.vw(280),
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="DashboardScreen"
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.dashboardImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={DashboardScreen}
      />
      <Drawer.Screen
        name="BrowseScreen"
        options={{
          drawerLabel: 'Browse',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.browseImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={BrowseScreen}
      />
      <Drawer.Screen
        name="InvitationScreen"
        options={{
          drawerLabel: 'Invitations',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.inviteIcon}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={InvitationScreen}
      />
      <Drawer.Screen
        name="QRCodeScannerScreen"
        options={{
          drawerLabel: 'Scan Qr Code',
          drawerIcon: ({focused, size}) => (
            <Image
              source={constants.images.qrCodeImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={QRCodeScannerScreen}
      />
      <Drawer.Screen
        name="MatchesUserScreen"
        options={{
          drawerLabel: 'My Matches',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.matchImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={MatchesUserScreen}
      />
      <Drawer.Screen
        name="AllMessageScreen"
        options={{
          drawerLabel: 'Messages',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.messageImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={AllMessageScreen}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({focused}) => (
            <Image
              source={constants.images.settingsImg}
              resizeMode="contain"
              style={{
                ...styles.icon,
                tintColor: focused
                  ? constants.colors.white
                  : constants.colors.navy,
              }}
            />
          ),
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: constants.vw(25),
    height: constants.vh(25),
    resizeMode: 'contain',
  },
  bottomStyle: {
    backgroundColor: constants.colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: constants.vw(15),
  },
  bottomTxt: {
    color: constants.colors.white,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.6,
  },
  userImg: {
    width: constants.vw(120),
    height: constants.vw(120),
    borderRadius: constants.vw(60),
    alignSelf: 'center',
    resizeMode: 'contain',
    borderWidth: 1.5,
    borderColor: constants.colors.inputborderColor,
  },
  seprator: {
    height: constants.vh(1),
    backgroundColor: constants.colors.lightGrey,
    marginTop: constants.vh(15),
  },
});

const mapStateToProps = (state: any) => ({
  saveSingleUserDetails: state.auth.saveSingleUserDetails,
  saveSingleUserSignUpDetails: state.auth.saveSingleUserSignUpDetails,
  mode: state.auth.saveMode,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);
