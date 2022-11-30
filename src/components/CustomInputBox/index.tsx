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
    secureTextEntry?: any;
    maxLength?:any;
}

const CustomInputBox = (props: props) => {
    const removeEmojis = (str: string) => {
        const regex =
            /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        return str.replace(regex, '');
    };
    const normalizeSpaces = (value: string) => {
        return value.replace(/^\s+/g, '');
    };
    return (
        <View style={[styles.txtInputView, props.inputViewStyle]}>
            <Text style={styles.txtInputHeader}>{props.headerTxt}</Text>
            <TextInput style={styles.txtInputStyle}
                placeholder={props.placeholderTxt}
                placeholderTextColor={constants.colors.border1}
                selectionColor={constants.colors.navy}
                value={props.value}
                onChangeText={text => {
                    props.onChangeText(normalizeSpaces(removeEmojis(text)));
                }}
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                secureTextEntry={props.secureTextEntry} 
                maxLength={props.maxLength}/>
        </View>
    )
}

const styles = StyleSheet.create({
    txtInputHeader: {
        color: constants.colors.white,
        fontSize: constants.vw(15.5),
        fontWeight: '500'
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