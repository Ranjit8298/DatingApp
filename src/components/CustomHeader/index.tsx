import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import constants from '../../constants';

interface props {
    headerTxt:any;
    userTxt?:any;
    messageCount:any;
}

const CustomHeader = (props:props) => {
    return (
        <View style={styles.headerView}>
            <Image style={styles.menuIcon}
                source={constants.images.menuImg} />
            <View>
                <Text style={styles.headerTxt}>{props.headerTxt}</Text>
                <Text style={styles.userTxt}>{props.userTxt}</Text>
            </View>

            <View>
                <Image style={{ ...styles.menuIcon, tintColor: constants.colors.navy, }}
                    source={constants.images.messageImg} />
                <View style={styles.messageRoundView}>
                    <Text style={styles.messageTxt}>{props.messageCount}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: constants.colors.white,
        height: constants.vh(58),
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: constants.vw(15)
    },
    menuIcon: {
        tintColor: constants.colors.colorPrimary,
        resizeMode: 'contain',
        width: constants.vw(30),
        height: constants.vh(30)
    },
    headerTxt: {
        fontSize: constants.vh(22),
        fontWeight: '600',
        color: constants.colors.navy
    },
    messageRoundView: {
        width: constants.vw(18),
        height: constants.vw(18),
        borderRadius: constants.vw(9),
        backgroundColor: constants.colors.colorPrimary,
        position: 'absolute',
        top: constants.vh(-12),
        end: constants.vh(0),
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageTxt: {
        color: constants.colors.white,
        fontSize: 12,
        alignSelf: 'center',
    },
    userTxt:{
        alignSelf:'center',
        color:constants.colors.colorPrimary,
        marginTop:constants.vh(-5)
    }
});
export default CustomHeader;