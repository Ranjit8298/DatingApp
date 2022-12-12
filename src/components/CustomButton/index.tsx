import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import constants from "../../constants";

interface props {
    onPress: Function;
    txt: any;
    btnStyle?: any;
    txtStyle?:any;
}
const CustomButton = (props: props) => {
    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => { props.onPress() }}
            style={[styles.createAccountBtn, props.btnStyle]}>
            <Text style={[styles.createAccountTxt, props.txtStyle]}>{props.txt}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    createAccountBtn: {
        width: constants.vw(295),
        height: constants.vh(56),
        backgroundColor: constants.colors.colorPrimary,
        borderRadius: constants.vw(15),
        justifyContent: 'center'
    },
    createAccountTxt: {
        fontSize: constants.vw(16),
        color: constants.colors.white,
        alignSelf: 'center',
        fontWeight: '700'
    },
})

export default CustomButton;