import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import constants from '../../constants';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import database from '@react-native-firebase/database';
import CommonFunction from '../../utils/CommonFunction';
import {v4 as uuidv4} from 'uuid';
import {connect} from 'react-redux';

interface props {
  navigation: any;
  route: any;
  saveNewReference: any;
}

const ProfileImageChooseScreen = (props: props) => {
  const [image, saveImage] = useState<{[key: string]: any}>({});

  // console.log('image==>',image);
  const saveUserImg = () => {
    database()
      .ref(props.saveNewReference)
      .update({
        userProfileImg: image.data,
        fileExt: image.mime,
      })
      .then(
        () =>
          CommonFunction.isToast(
            'success',
            'Your Profile Image saved successfully',
          ),
        props.navigation.navigate('AccessLoactionScreen'),
      );
  };

  if (!CommonFunction.isNullUndefined(image)) {
    saveUserImg();
  }

  const takeImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image);
      saveImage(image);
    });
  };

  const chooseGallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image);
      saveImage(image);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AccessLoactionScreen');
        }}
        activeOpacity={0.8}
        style={styles.skipView}>
        <Text style={styles.skipTxt}>{'Skip'}</Text>
      </TouchableOpacity>
      <View style={styles.circleView} />
      <View
        style={{
          ...styles.circleView,
          top: constants.vh(-150),
          end: constants.vh(-10),
        }}
      />
      <View
        style={{
          ...styles.circleView,
          top: constants.vh(-50),
          end: constants.vh(-180),
        }}
      />
      <View style={{...styles.imgCircleView}}>
        <View style={styles.circleImageView}>
          {CommonFunction.isNullUndefined(image.data) ? (
            <Image style={styles.imgView} source={constants.images.maleImg} />
          ) : (
            <Image
              style={styles.imgView}
              source={{uri: `data:${image.mime};base64,${image.data}`}}
            />
          )}
        </View>
      </View>
      <View style={styles.imgPickerView}>
        <Text style={styles.takeSelfie}>{constants.string.takeASelfie}</Text>
        <Text style={styles.takeSelfieSummary}>
          {constants.string.selfieSummary}
        </Text>
        <CustomButton
          onPress={() => {
            takeImage();
          }}
          txt={constants.string.takePhoto}
          btnStyle={{
            width: constants.vw(230),
            alignSelf: 'center',
            marginTop: constants.vh(15),
          }}
        />
        <Text style={styles.takeSelfie}>{'OR'}</Text>
        <CustomButton
          onPress={() => {
            chooseGallary();
          }}
          txt={constants.string.accessGallery}
          btnStyle={{
            width: constants.vw(230),
            alignSelf: 'center',
            marginTop: constants.vh(15),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.colorPrimary,
    flex: 1,
    justifyContent: 'center',
  },
  circleView: {
    width: constants.vw(200),
    height: constants.vh(200),
    borderRadius: constants.vw(100),
    backgroundColor: constants.colors.white,
    opacity: 0.3,
    position: 'absolute',
    top: constants.vh(-130),
    end: constants.vh(-70),
  },
  imgPickerView: {
    width: constants.vw(320),
    height: constants.vh(320),
    backgroundColor: constants.colors.white,
    borderRadius: constants.vw(15),
    alignSelf: 'center',
  },
  imgCircleView: {
    width: constants.vw(280),
    height: constants.vh(140),
    borderRadius: constants.vw(100),
    backgroundColor: constants.colors.white,
    position: 'absolute',
    top: constants.vh(195),
    start: constants.vh(52),
    transform: [{rotate: '90deg'}],
    justifyContent: 'center',
  },
  takeSelfie: {
    color: constants.colors.navy,
    fontSize: constants.vw(24),
    alignSelf: 'center',
    letterSpacing: 0.2,
    fontWeight: 'bold',
    marginTop: constants.vh(15),
  },
  takeSelfieSummary: {
    color: constants.colors.navy,
    fontSize: constants.vw(15),
    alignSelf: 'center',
    letterSpacing: 0.2,
    fontWeight: '400',
    textAlign: 'center',
    width: constants.vw(260),
  },
  circleImageView: {
    width: constants.vw(110),
    height: constants.vw(110),
    borderRadius: constants.vw(55),
    borderColor: constants.colors.navy,
    borderWidth: 1,
    marginStart: constants.vh(10),
  },
  imgView: {
    width: constants.vw(88),
    height: constants.vh(88),
    borderRadius: constants.vw(44),
    transform: [{rotate: '270deg'}],
    alignSelf: 'center',
    marginTop: constants.vh(14),
    resizeMode: 'contain',
  },
  skipView: {
    position: 'absolute',
    top: constants.vh(10),
    start: constants.vw(20),
  },
  skipTxt: {
    color: constants.colors.white,
    fontSize: constants.vw(18),
    fontWeight: '400',
  },
});

const mapStateToProps = (state: any) => ({
  saveNewReference: state.auth.saveNewReference,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileImageChooseScreen);
