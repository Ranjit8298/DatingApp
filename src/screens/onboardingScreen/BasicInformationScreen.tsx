import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomDateInput from '../../components/CustomDateInput';
import CustomInputBox from '../../components/CustomInputBox';
import constants from '../../constants';

interface props {
    navigation: any;
}

const BasicInformationScreen = (props: props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [date, saveDate] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circleView} />
            <View style={{ ...styles.circleView, top: constants.vh(-150), end: constants.vh(-10) }} />
            <View style={{ ...styles.circleView, top: constants.vh(-50), end: constants.vh(-180) }} />
            <Text style={styles.loginTxt}>{constants.string.basicInfo}</Text>
            <CustomInputBox
                headerTxt={constants.string.firstName}
                placeholderTxt={constants.string.enterFirstName}
                value={name}
                onChangeText={(val: any) => { setName(val) }}
                keyboardType='default'
                inputViewStyle={styles.inputViewStyle}
                returnKeyType={'next'} />

            <CustomDateInput
                // titleStyle={}
                placeholder={constants.string.selectDate}
                // majorContainer={screenStyle.majorContainer}
                // container={screenStyle.datePickerStyle}
                fieldName="date"
                label={'Select Date'}
                value={date}
                onChangeText={(val: any) => {
                    saveDate(val);
                }}
                dateFormat={'DD-MMM-YYYY'}
                maxDate={new Date()}
            />

            {/* <CustomInputBox
                headerTxt={constants.string.password.toUpperCase()}
                placeholderTxt={constants.string.enterPass}
                value={password}
                onChangeText={(val: any) => { setPassword(val) }}
                keyboardType='default'
                inputViewStyle={styles.inputViewStyle}
                returnKeyType={'done'}
                secureTextEntry /> */}

            <View style={styles.loginView}>
                <CustomButton
                    onPress={() => { }}
                    txt={constants.string.submit.toUpperCase()}
                    btnStyle={styles.btnStyle} />

                <TouchableOpacity style={styles.forgotTouchStyle}
                    activeOpacity={0.8}
                    onPress={() => { }}>
                    <Text style={styles.forgotTxt}>{constants.string.forgotPass}</Text>
                </TouchableOpacity>
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
})
export default BasicInformationScreen;