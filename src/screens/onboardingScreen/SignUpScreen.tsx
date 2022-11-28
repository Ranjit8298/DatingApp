import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


interface props {
    navigation: any;
}

const SignUpScreen = (props: props) => {
    const [mobile, setMobile] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circleView} />
            <View style={{ ...styles.circleView, top: constants.vh(-150), end: constants.vh(-10) }} />
            <View style={{ ...styles.circleView, top: constants.vh(-50), end: constants.vh(-180) }} />
            <Text style={styles.loginTxt}>{constants.string.signUp}</Text>

            <CustomInputBox
                headerTxt={constants.string.mobileNumber}
                placeholderTxt={constants.string.enterMobileNum}
                value={mobile}
                onChangeText={(val: any) => setMobile(val)}
                keyboardType='number-pad'
                inputViewStyle={styles.inputViewStyle}
                returnKeyType={'done'} />

            <View style={styles.loginView}>
                <CustomButton
                    onPress={() => { props.navigation.navigate('BasicInformationScreen') }}
                    txt={constants.string.signUp.toUpperCase()}
                    btnStyle={styles.btnStyle} />

                <TouchableOpacity style={styles.forgotTouchStyle}
                    activeOpacity={0.8}
                    onPress={() => { props.navigation.navigate('LoginScreen') }}>
                    <Text style={styles.forgotTxt}>{constants.string.alreadyAMamber}</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.footerImg}
                source={constants.images.cityImg} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: constants.colors.colorPrimary,
        flex: 1,
    },
    loginTxt: {
        color: constants.colors.white,
        marginStart: constants.vw(40),
        fontSize: constants.vw(32),
        fontWeight: '400',
        marginTop: constants.vh(150),
        letterSpacing: 0.8
    },
    inputViewStyle: {
        marginTop: constants.vh(40)
    },
    btnStyle: {
        backgroundColor: constants.colors.secondary,
        width: constants.vw(140),
        marginStart: constants.vw(40),
    },
    loginView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: constants.vh(80),
    },
    forgotTouchStyle: {
        justifyContent: 'center',
        marginEnd: constants.vw(27)
    },
    forgotTxt: {
        color: constants.colors.navy,
        fontSize: constants.vw(16.5),
        fontWeight: '400',
        letterSpacing: 0.2,
    },
    circleView: {
        width: constants.vw(200),
        height: constants.vh(200),
        borderRadius: constants.vw(100),
        backgroundColor: constants.colors.white,
        opacity: 0.3,
        position: 'absolute',
        top: constants.vh(-130),
        end: constants.vh(-70)
    },
    footerImg: {

        width: '100%',
        bottom: constants.vh(-100),
        opacity: 0.7
    }
})
export default SignUpScreen;