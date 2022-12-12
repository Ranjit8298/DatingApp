import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Platform, StyleSheet, Image, PermissionsAndroid } from 'react-native';
import CustomButton from '../../components/CustomButton';
import constants from '../../constants';
// import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';

interface props {
    navigation: any;
}

const AccessLoactionScreen = (props: props) => {
    const [latitude, setlatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [accuracy, setAccuracy] = useState('');

    useEffect(() => {
        locationPermission();
    }, [])
    const permissionPopup = async () => {
        try {
            const data =
                await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                    interval: 10000,
                    fastInterval: 5000,
                });
            return true;
        } catch (err) {
            return false;
        }
    };
    const hasLocationPermission = async () => {
        if (
            Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)
        ) {
            return true;
        }
        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (hasPermission) {
            const value = await permissionPopup();
            return value;
        }

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) {
            const value = await permissionPopup();
            return value;
        }
        if (status === PermissionsAndroid.RESULTS.DENIED) {
            // PermissionsAndroid.RESULTS.ACCESS_FINE_LOCATION
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        }
        return false;
    };
    const locationPermission = async () => {
        const hasLocationPermissions = await hasLocationPermission();
        if (hasLocationPermissions) {
            // Geolocation.getCurrentPosition(
            //     info => {
            //         console.log('info===>',info);
            //         let cordinate = info.coords;
            //         console.log('cordinate==>',cordinate);
            //         let lati = cordinate.latitude + '';
            //         let longi = cordinate.longitude + '';
            //         setlatitude(lati);
            //         setlongitude(longi);

            //         console.log('latitude==>',latitude+'');
            //         console.log('longitude==>',longitude+'');

            //     },
            //     () => { },
            //     {
            //         enableHighAccuracy: false,
            //     },
            // );

            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    let cordinate = position.coords;
                    console.log('cordinate==>', cordinate);
                    let lati = cordinate.latitude + '';
                    let longi = cordinate.longitude + '';
                    let accuracy = cordinate.accuracy + '';
                    setlatitude(lati);
                    setlongitude(longi);
                    setAccuracy(accuracy);

                    console.log('latitude==>', lati);
                    console.log('longitude==>', longi);
                    console.log('longitude==>', accuracy);
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circleView} />
            <View style={{ ...styles.circleView, top: constants.vh(-150), end: constants.vh(-10) }} />
            <View style={{ ...styles.circleView, top: constants.vh(-50), end: constants.vh(-180) }} />

            <View style={styles.locPickerView}>
                <Image style={styles.locationIcon}
                    source={constants.images.locationImg} />
                <Text style={styles.accessLiveLoc}>{constants.string.accessLiveLoc}</Text>
                <Text style={{
                    ...styles.accessLiveLoc,
                    fontSize: constants.vw(16), fontWeight: '500',
                    textAlign: 'center', padding: constants.vw(15)
                }}>{constants.string.locationSummary}</Text>
            </View>

            <CustomButton
                onPress={() => {
                    if (latitude && longitude !== '') {
                        props.navigation.navigate('MapViewScreen', { lat: latitude, long: longitude,accuracy:accuracy })

                    }

                }}
                txt={constants.string.startExploring}
                btnStyle={{ alignSelf: 'center', marginTop: constants.vh(50) }} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.colors.white,
        flex: 1,
        justifyContent: 'center'
    },
    circleView: {
        width: constants.vw(200),
        height: constants.vh(200),
        borderRadius: constants.vw(100),
        backgroundColor: constants.colors.colorPrimary,
        opacity: 0.3,
        position: 'absolute',
        top: constants.vh(-130),
        end: constants.vh(-70)
    },
    locPickerView: {
        width: constants.vw(320),
        height: constants.vh(300),
        backgroundColor: constants.colors.navy,
        borderRadius: constants.vw(15),
        alignSelf: 'center',
        shadowColor: constants.colors.colorPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
        position: 'relative'
    },
    locationIcon: {
        width: constants.vw(170),
        height: constants.vh(190),
        resizeMode: 'cover',
        position: 'absolute',
        top: constants.vh(-120),
        start: constants.vw(72)
    },
    accessLiveLoc: {
        color: constants.colors.white,
        marginTop: constants.vh(80),
        alignSelf: 'center',
        fontSize: constants.vw(22),
        fontWeight: 'bold',
        letterSpacing: 0.2,

    }

})
export default AccessLoactionScreen;