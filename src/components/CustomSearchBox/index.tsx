import React from 'react';
import { View, Text, TextInput, StyleSheet,Image } from 'react-native';
import constants from '../../constants';


const CustomSearchBox = () => {
    return (
        <View style={styles.searchView}>
            <View style={styles.searchContainer}>
                <Image source={constants.images.searchImg}/>
                <TextInput
                    style={styles.searchInputView}
                    placeholder={'Search Location'}
                    selectionColor={constants.colors.colorPrimary} />
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
        // width:constants.vw(335),
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
        alignSelf:'center',
        alignItems:'center',
        paddingStart:constants.vw(10),
        paddingEnd:constants.vw(10)
        
    }
});

export default CustomSearchBox;