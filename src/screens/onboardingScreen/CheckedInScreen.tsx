import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import constants from "../../constants";

interface props {
    navigation: any;
}

const CheckedInScreen = (props: props) => {
    return (
        <ImageBackground source={require('../../assets/images/dating_bg.jpg')}
            style={styles.container}
            resizeMode='cover'>
            <Text style={styles.checkedInTxt}>{constants.string.checkedIn}</Text>
            <Text style={{ ...styles.checkedInTxt, fontSize: constants.vw(18), marginTop: constants.vh(5), textAlign: 'center' }}>{constants.string.chatTxt}</Text>
            <CustomButton
                onPress={() => {props.navigation.navigate('SignUpScreen')}}
                txt={constants.string.signUpTxt}
                btnStyle={styles.btnStyle} />

            <CustomButton
                onPress={() => { props.navigation.navigate('LoginScreen') }}
                txt={constants.string.loginTxt.toUpperCase()}
                btnStyle={styles.btnStyleLogin} />
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    checkedInTxt: {
        fontSize: constants.vw(25),
        color: constants.colors.colorPrimary,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: constants.vh(70)
    },
    btnStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: constants.vh(150),
        backgroundColor: constants.colors.secondary,
    },
    btnStyleLogin: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: constants.vh(70),
        backgroundColor: constants.colors.colorPrimary,
    }
});

export default CheckedInScreen;

