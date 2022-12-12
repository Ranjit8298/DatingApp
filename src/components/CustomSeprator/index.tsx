import React from 'react';
import {View, StyleSheet} from 'react-native';
import constants from '../../constants';

interface props {
    sepratorStyle?:any
}

const CustomSeprator = (props:props) => {
  return <View style={[styles.seprator, props.sepratorStyle]} />;
};

const styles = StyleSheet.create({
  seprator: {
    height: constants.vh(1.5),
    backgroundColor:constants.colors.lightGrey
  },
});

export default CustomSeprator;
