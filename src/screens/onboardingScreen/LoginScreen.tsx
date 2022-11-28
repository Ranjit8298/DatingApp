import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';

interface props {
    navigation: any;
}

const LoginScreen = (props: props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circleView} />
            <View style={{ ...styles.circleView, top: constants.vh(-150), end: constants.vh(-10) }} />
            <View style={{ ...styles.circleView, top: constants.vh(-50), end: constants.vh(-180) }} />
            <Text style={styles.loginTxt}>{constants.string.loginTxt}</Text>
            <CustomInputBox
                headerTxt={constants.string.emailTxt}
                placeholderTxt={constants.string.enterEmailTxt}
                value={email}
                onChangeText={(val: any) => { setEmail(val) }}
                keyboardType='default'
                inputViewStyle={styles.inputViewStyle}
                returnKeyType={'next'} />

            <CustomInputBox
                headerTxt={constants.string.password.toUpperCase()}
                placeholderTxt={constants.string.enterPass}
                value={password}
                onChangeText={(val: any) => { setPassword(val) }}
                keyboardType='default'
                inputViewStyle={styles.inputViewStyle}
                returnKeyType={'done'}
                secureTextEntry />

            <View style={styles.loginView}>
                <CustomButton
                    onPress={() => { console.log(email) }}
                    txt={constants.string.loginTxt.toUpperCase()}
                    btnStyle={styles.btnStyle} />

                <TouchableOpacity style={styles.forgotTouchStyle}
                    activeOpacity={0.8}
                    onPress={() => { }}>
                    <Text style={styles.forgotTxt}>{constants.string.forgotPass}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: constants.colors.white }}>{constants.string.dontHaveAcc}</Text>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { props.navigation.navigate('SignUpScreen') }}>
                        <Text style={styles.signUpBtnTxt}>
                            {constants.string.signUp}
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>

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
        fontSize: constants.vw(16),
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
    footerView: {
        width: '100%',
        height: constants.vh(60),
        backgroundColor: constants.colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        opacity: 0.8
    },
    signUpBtnTxt: {
        textAlign: 'center',
        color: constants.colors.colorPrimary,
        marginStart: constants.vw(8),
        fontWeight: '700'
    }
})
export default LoginScreen;