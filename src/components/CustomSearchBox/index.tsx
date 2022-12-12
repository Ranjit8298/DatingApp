import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import constants from '../../constants';

interface props {
    value: any;
    placeholder: any;
    onChangeText: Function;
    keyboardType: any;
    returnKeyType: any;
}

const CustomSearchBox = (props: props) => {
    const removeEmojis = (str: string) => {
        const regex =
            /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        return str.replace(regex, '');
    };
    const normalizeSpaces = (value: string) => {
        return value.replace(/^\s+/g, '');
    };
    return (
        <View style={styles.searchView}>
            <View style={styles.searchContainer}>
                <Image style={{ tintColor: constants.colors.colorPrimary }}
                    source={constants.images.searchImg} />
                <TextInput
                    style={styles.searchInputView}
                    placeholder={props.placeholder}
                    selectionColor={constants.colors.colorPrimary}
                    value={props.value}
                    onChangeText={text => {
                        props.onChangeText(normalizeSpaces(removeEmojis(text)));
                    }}
                    keyboardType={props.keyboardType}
                    returnKeyType={props.returnKeyType} />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: constants.colors.lightGrey,
        height: constants.vh(60),
        borderBottomWidth: 1,
        borderBottomColor: constants.colors.border1,
        borderTopColor: constants.colors.border1,
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInputView: {
        width:'100%',
        // height:constants.vh(45),
        // borderWidth:1,
        // borderColor:constants.colors.inputborderColor,
        // borderRadius:constants.vw(15),
        // backgroundColor:constants.colors.white,
        // padding:constants.vh(10),
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: constants.vw(345),
        height: constants.vh(50),
        borderWidth: 1,
        borderColor: constants.colors.inputborderColor,
        borderRadius: constants.vw(15),
        backgroundColor: constants.colors.white,
        alignSelf: 'center',
        alignItems: 'center',
        paddingStart: constants.vw(15),
        paddingEnd: constants.vw(15)

    }
});

export default CustomSearchBox;