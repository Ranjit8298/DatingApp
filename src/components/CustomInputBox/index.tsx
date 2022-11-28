import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import constants from '../../constants';

interface props {
    headerTxt: any;
    placeholderTxt: any;
    value: any;
    onChangeText: any;
    keyboardType: any;
    inputViewStyle: any;
    returnKeyType: any;
    secureTextEntry?:any;
}

const CustomInputBox = (props: props) => {
    return (
        <View style={[styles.txtInputView, props.inputViewStyle]}>
            <Text style={styles.txtInputHeader}>{props.headerTxt}</Text>
            <TextInput style={styles.txtInputStyle}
                placeholder={props.placeholderTxt}
                placeholderTextColor={constants.colors.border1}
                selectionColor={constants.colors.navy}
                value={props.value}
                onChangeText={() => { props.onChangeText() }}
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                secureTextEntry={props.secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtInputHeader: {
        color: constants.colors.white,
        fontSize: constants.vw(15.5),
        fontWeight: '400'
    },
    txtInputView: {
        marginStart: constants.vw(40),
    },
    txtInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: constants.colors.white,
        width: constants.vw(310),
        height: constants.vh(45),
        fontSize: constants.vw(15.5)
    }
});

export default CustomInputBox;