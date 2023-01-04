import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import constants from '../../constants';
import CustomSeprator from '../../components/CustomSeprator';
import {connect} from 'react-redux';
import {Logout} from '../../modules/auth';
import CommonFunction from '../../utils/CommonFunction';
import {resetDashboard} from '../../modules/dashboard';

interface props {
  navigation: any;
  Logout: any;
  resetDashboard: any;
}
const LogoutModal = (props: props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.navigation.goBack();
      }}
      style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.goBack();
        }}>
        <View style={styles.cardView}>
          <Text style={styles.topView}>{'Are you sure want to logout?'}</Text>
          <CustomSeprator />
          <View style={styles.bottomView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Text style={styles.actionTxt}>{'CANCEL'}</Text>
            </TouchableOpacity>

            <CustomSeprator
              sepratorStyle={{width: constants.vw(2), height: constants.vh(25)}}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // props.Logout(() => {
                //   Router.resetNew(props.navigation, 'RootNavigator', {});
                // });
                props.Logout();
                props.resetDashboard();
                props.navigation.navigate('CheckedInScreen');
                CommonFunction.isToast('success', 'Logout Successfully');
              }}>
              <Text style={{...styles.actionTxt, color: constants.colors.colorPrimary}}>
                {'LOGOUT'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    width: constants.vw(290),
    height: constants.vh(100),
    backgroundColor: constants.colors.white,
    borderRadius: constants.vh(10),
  },
  topView: {
    alignSelf: 'center',
    fontSize: constants.vw(18),
    color: constants.colors.light_black,
    fontWeight: '400',
    letterSpacing: 0.2,
    padding: constants.vw(10),
  },
  bottomView: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: constants.vh(0),
    padding: constants.vw(10),
  },
  actionTxt: {
    fontSize: constants.vw(15.5),
    color: constants.colors.grey,
  },
});

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  Logout: () => Logout(),
  resetDashboard: () => resetDashboard(),
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);
