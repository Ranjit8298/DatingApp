import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';

interface props {
  navigation: any;
}

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import constants from '../../constants';

const QRCodeScannerScreen = (props: props) => {

  const onSuccess = (e: any) => {
    console.log('e==>', e);
    console.log('e.data==>', e.data);
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    props.navigation.navigate('MatchesUserScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        showMarker={true}
        reactivateTimeout={2000}
        markerStyle={{ borderColor: constants.colors.colorPrimary, borderRadius: constants.vw(15) }}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={<Text style={styles.centerText}>{'Scanning The Nearest Active User'}</Text>}
      />
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: constants.vw(30),
    color: constants.colors.navy
  },
});

export default QRCodeScannerScreen;