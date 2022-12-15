import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import constants from '../../constants';

interface props {
  navigation: any;
}

const AllMessageScreen = (props: props) => {
  return (
    <SafeAreaView>
      <CustomHeader
        headerTxt={constants.string.messages}
        messageCount={'13'}
        onMenuPress={() => {
          props.navigation.openDrawer();
        }}
        onMessagePress={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
});

export default AllMessageScreen;
