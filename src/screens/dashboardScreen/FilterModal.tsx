import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import constants from '../../constants';
import {Slider} from '@miblanchard/react-native-slider';
import CommonFunction from '../../utils/CommonFunction';
import CustomButton from '../../components/CustomButton';

interface props {
  navigation: any;
}

const FilterModal = (props: props) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [value, setValue] = useState();

  // age
  const [minA, setMinA] = useState(18);
  const [maxA, setMaxA] = useState(100);
  const [valueA, setValueA] = useState();

  console.log('valueA==>', valueA);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [everyone, setEveryone] = useState(false);

  const maleSelect = () => {
    if (male === false) {
      setMale(true);
      setFemale(false);
      setEveryone(false);
    } else {
      setMale(false);
    }
  };

  const femaleSelect = () => {
    if (female === false) {
      setMale(false);
      setFemale(true);
      setEveryone(false);
    } else {
      setFemale(false);
    }
  };

  const everyoneSelect = () => {
    if (everyone === false) {
      setMale(false);
      setFemale(false);
      setEveryone(true);
    } else {
      setEveryone(false);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {}}
      style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.goBack();
        }}>
        <View style={styles.cardView}>
          <Text style={styles.topView}>{'Filters'}</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.maxDist}>{'Maximum Distance'}</Text>
            {!CommonFunction.isNullUndefined(value) ? (
              <Text
                style={{
                  ...styles.maxDist,
                  color: constants.colors.colorPrimary,
                }}>{`${value + ''}km`}</Text>
            ) : (
              <Text style={styles.maxDist}>{`${min + ''}km`}</Text>
            )}
          </View>
          <Slider
            value={value}
            minimumValue={min}
            maximumValue={max}
            step={1}
            trackClickable={true}
            minimumTrackTintColor={constants.colors.colorPrimary}
            maximumTrackTintColor={constants.colors.lightGrey}
            animateTransitions={true}
            thumbTintColor={constants.colors.colorPrimary}
            onValueChange={value => {
              setValue(value);
            }}
          />

          {/* Age */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.maxDist}>{'Age'}</Text>
            {!CommonFunction.isNullUndefined(valueA) ? (
              <Text
                style={{
                  ...styles.maxDist,
                  color: constants.colors.colorPrimary,
                }}>{`18 - ${valueA + ''}`}</Text>
            ) : (
              <Text style={styles.maxDist}>{`${minA + ''}`}</Text>
            )}
          </View>
          <Slider
            value={valueA}
            minimumValue={minA}
            maximumValue={maxA}
            step={1}
            trackClickable={true}
            minimumTrackTintColor={constants.colors.colorPrimary}
            maximumTrackTintColor={constants.colors.lightGrey}
            animateTransitions
            thumbTintColor={constants.colors.colorPrimary}
            // thumbStyle={{marginStart:60}}
            onValueChange={val => {
              setValueA(val);
            }}
          />
          <Text style={styles.maxDist}>{'Gender'}</Text>

          <View style={styles.genderViewStyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                maleSelect();
              }}
              style={{
                ...styles.genderView,
                borderColor:
                  male === true
                    ? constants.colors.colorPrimary
                    : constants.colors.border1,
              }}>
              <Text
                style={{
                  color:
                    male === true
                      ? constants.colors.colorPrimary
                      : constants.colors.gray,
                }}>
                {'Male'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                femaleSelect();
              }}
              style={{
                ...styles.genderView,
                borderColor:
                  female === true
                    ? constants.colors.colorPrimary
                    : constants.colors.border1,
              }}>
              <Text
                style={{
                  color:
                    female === true
                      ? constants.colors.colorPrimary
                      : constants.colors.gray,
                }}>
                {'Female'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                everyoneSelect();
              }}
              style={{
                ...styles.genderView,
                borderColor:
                  everyone === true
                    ? constants.colors.colorPrimary
                    : constants.colors.border1,
              }}>
              <Text
                style={{
                  color:
                    everyone === true
                      ? constants.colors.colorPrimary
                      : constants.colors.gray,
                }}>
                {'Everyone'}
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            onPress={() => {
              props.navigation.goBack();
            }}
            txt={constants.string.submit}
            btnStyle={styles.btnStyle}
          />
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    width: constants.vw(320),
    height: 'auto',
    backgroundColor: constants.colors.white,
    borderRadius: constants.vh(10),
    padding: constants.vw(15),
  },
  maxDist: {
    fontSize: constants.vw(18),
    fontWeight: '400',
    color: constants.colors.navy,
  },
  genderView: {
    width: constants.vw(80),
    height: constants.vh(35),
    borderRadius: constants.vw(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: constants.colors.border1,
  },
  genderViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: constants.vh(8),
    backgroundColor: constants.colors.inputborderColor,
    padding: constants.vw(10),
    borderRadius: constants.vw(15),
    borderWidth: 1,
    borderColor: constants.colors.border1,
  },
  btnStyle: {
    width: constants.vw(265),
    height: constants.vh(48),
    alignSelf: 'center',
    marginTop: constants.vh(20),
  },
  topView: {
    alignSelf: 'center',
    marginBottom: constants.vh(10),
    color: constants.colors.colorPrimary,
    fontSize: constants.vw(18),
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
});

export default FilterModal;
