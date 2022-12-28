import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import constants from '../../constants';
import database from '@react-native-firebase/database';
import {v4 as uuidv4} from 'uuid';
import CommonFunction from '../../utils/CommonFunction';
import {connect} from 'react-redux';
import {saveCurrentAddress} from '../../modules/auth';

interface props {
  navigation: any;
  route: any;
  saveNewReference: any;
  saveCurrentAddress:any;
  mode:any;
}

const MapViewScreen = (props: props) => {
  const [address, setRealAddress] = React.useState('');
  const [toggle, setToggle] = React.useState(false);

  const latitude = props.route.params.lat;
  const longitude = props.route.params.long;
  const accuracy = props.route.params.accuracy;

  const saveLocation = () => {
    database()
      .ref(props.saveNewReference)
      .update({
        userLocation: address,
      })
      .then(() =>
        CommonFunction.isToast('success', 'Your Location Saved Successfully'),
      );
  };

  // console.log('toggle===>', toggle);
  if (toggle === true && props.mode === 'signup') {
    saveLocation();
  }

  const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
  const circumference = (40075 / 360) * 1000;
  const latDelta = accuracy * (1 / (Math.cos(latitude) * circumference));
  const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;

  useEffect(() => {
    // console.log('lat==>', latitude);
    // console.log('long==>', longitude);
    // console.log('accuracy==>', accuracy);

    getAddressFromCoordinates({latitude, longitude});
  }, []);

  const api_key = 'AIzaSyDFbc0EvDfyY8k1ro1phUeISIHqoiNMWiI';
  function getAddressFromCoordinates({latitude, longitude}: any) {
    return new Promise((resolve, reject) => {
      fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          latitude +
          ',' +
          longitude +
          '&key=' +
          api_key,
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 'OK') {
            resolve(responseJson?.results?.[0]?.formatted_address);
            // console.log('responseJson==>', responseJson);
            const formatted_address =
              responseJson?.results?.[0]?.formatted_address;
            const sortAddress = formatted_address.split(' ').slice(1).join(' ');
            setRealAddress(sortAddress);
            setToggle(true);
          } else {
            reject('not found');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        {/* customMapStyle={mapStyle}  */}
        <MapView
          style={styles.mapStyle}
          mapType={Platform.OS == 'android' ? 'standard' : 'standard'}
          zoomControlEnabled={true}
          zoomTapEnabled={true}
          maxZoomLevel={18}
          initialRegion={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: latDelta,
            longitudeDelta: lonDelta,
          }}>
          <Marker
            draggable
            coordinate={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
            }}
            onDragEnd={e =>
              Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Your Curernt Address'}
            description={address}
          />
        </MapView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('DrawerNavigation');
            props.saveCurrentAddress(address);
          }}
          style={{
            backgroundColor: constants.colors.black,
            width: constants.vw(250),
            height: constants.vh(45),
            borderRadius: constants.vw(5),
            opacity: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: constants.vw(35),
          }}>
          <Text
            style={{
              color: constants.colors.white,
              alignSelf: 'center',
              fontSize: constants.vw(16),
              fontWeight: 'bold',
            }}>
            {constants.string.goToDashboard.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const mapStateToProps = (state: any) => ({
  saveNewReference: state.auth.saveNewReference,
  mode: state.auth.saveMode,
});

const mapDispatchToProps = {
  saveCurrentAddress: (data: any) => saveCurrentAddress(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(MapViewScreen);
