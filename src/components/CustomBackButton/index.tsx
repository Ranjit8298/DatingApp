import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import constants from '../../constants';

interface props {
    onPress: Function;
}
const CustomBackButton = (props: props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => { props.onPress() }}>
            <Image source={constants.images.arrowBackImg}
                style={styles.img} />
        </TouchableOpacity>

    )

};

const styles = StyleSheet.create({
    img: {
        tintColor: constants.colors.white,
        marginStart: constants.vw(15),
        marginTop: constants.vh(10)
    }
})

export default CustomBackButton;