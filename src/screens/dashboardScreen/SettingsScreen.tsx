import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';
import CustomSeprator from '../../components/CustomSeprator';
import Router from '../../navigator/Router';
import {connect} from 'react-redux';
import {Logout} from '../../modules/auth';
import CommonFunction from '../../utils/CommonFunction';

interface props {
  navigation: any;
  Logout: any;
}
const SettingsScreen = (props: props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabledIncognito, setIsEnabledIncognito] = React.useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchIncognito = () =>
    setIsEnabledIncognito(previousState => !previousState);

  const renderSettingsItem = (heading: any, data: any) => {
    return (
      <View style={styles.dataBox}>
        <Text style={styles.headingStyle}>{heading}</Text>
        <Text style={styles.dataStyle}>{data}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        headerTxt={constants.string.settings}
        messageCount={'30'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {}}
        showRound={true}
        leftImg={constants.images.messageImg}
        rightImg={constants.images.menuImg}
      />
      <ImageBackground
        style={styles.topChatImg}
        source={constants.images.chatBgImg}>
        <View style={styles.topChatImgView}>
          <Text style={styles.topHeader}>{'You’re on our free plan'}</Text>
          <Text
            style={{
              ...styles.topHeader,
              fontSize: constants.vw(16),
              fontWeight: '400',
              marginTop: constants.vh(0),
            }}>
            {'You want to make the most out of Hooked?'}
          </Text>
          <CustomButton
            onPress={() => {}}
            txt={'Upgrade to PRO'}
            btnStyle={styles.btnStyle}
          />
        </View>
      </ImageBackground>
      <Text style={styles.seactionHeader}>{'GENERAL'}</Text>
      <CustomSeprator />
      <View>{renderSettingsItem('My current location', 'India')}</View>
      <CustomSeprator sepratorStyle={{marginStart: constants.vw(15)}} />
      <View>{renderSettingsItem('Search radius', '50km')}</View>
      <CustomSeprator sepratorStyle={{marginStart: constants.vw(15)}} />
      <View>{renderSettingsItem('Gender preference', 'Male')}</View>
      <CustomSeprator />

      <Text style={styles.seactionHeader}>{'PRIVACY'}</Text>
      <CustomSeprator />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: constants.vw(15),
        }}>
        <Text style={styles.headingStyle}>{'Push notifications'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={
            isEnabled ? constants.colors.colorPrimary : constants.colors.navy
          }
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <CustomSeprator sepratorStyle={{marginStart: constants.vw(15)}} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: constants.vw(15),
        }}>
        <Text style={styles.headingStyle}>{'Incognito browsing'}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={
            isEnabledIncognito
              ? constants.colors.colorPrimary
              : constants.colors.navy
          }
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchIncognito}
          value={isEnabledIncognito}
        />
      </View>
      <CustomSeprator sepratorStyle={{marginStart: constants.vw(15)}} />

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.signOutView}
        onPress={() => {
          // props.Logout(() => {
          //   Router.resetNew(props.navigation, 'RootNavigator', {});
          // });
          props.Logout();
          CommonFunction.isToast('success', 'Logout Successfully');
          props.navigation.navigate('CheckedInScreen');
        }}>
        <Image
          style={{tintColor: constants.colors.colorPrimary}}
          source={constants.images.logoutImg}
        />
        <Text style={styles.signOutTxt}>{'LOGOUT'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  topChatImg: {
    width: constants.vw(390),
    height: constants.vh(205),
  },
  topChatImgView: {
    width: constants.vw(390),
    height: constants.vh(205),
    backgroundColor: constants.colors.navy,
    opacity: 0.75,
  },
  topHeader: {
    color: constants.colors.white,
    alignSelf: 'center',
    fontSize: constants.vw(18),
    marginTop: constants.vh(30),
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  btnStyle: {
    alignSelf: 'center',
    backgroundColor: constants.colors.colorPrimary,
    marginTop: constants.vh(30),
  },
  seactionHeader: {
    color: constants.colors.grey,
    fontSize: 16,
    padding: constants.vw(15),
  },
  dataBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: constants.vw(15),
  },
  headingStyle: {
    color: constants.colors.black,
    fontSize: constants.vw(16),
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  dataStyle: {
    color: constants.colors.colorPrimary,
    fontSize: constants.vw(14.5),
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  signOutView: {
    backgroundColor: constants.colors.dark_white,
    width: constants.vw(335),
    height: constants.vh(58),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: constants.vh(40),
    borderRadius: constants.vw(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  signOutTxt: {
    alignSelf: 'center',
    color: constants.colors.colorPrimary,
    fontWeight: 'bold',
    fontSize: constants.vw(17),
    marginStart: constants.vh(8),
  },
});

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  Logout: () => Logout(),
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
