import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {UIManager} from 'react-native';
import OnboardingScreen from '../screens/onboardingScreen/OnboardingScreen';
import CheckedInScreen from '../screens/onboardingScreen/CheckedInScreen';
import LoginScreen from '../screens/onboardingScreen/LoginScreen';
import SignUpScreen from '../screens/onboardingScreen/SignUpScreen';
import BasicInformationScreen from '../screens/onboardingScreen/BasicInformationScreen';
import ProfileImageChooseScreen from '../screens/onboardingScreen/ProfileImageChooseScreen';
import AccessLoactionScreen from '../screens/onboardingScreen/AccessLocationScreen';
import OtpScreen from '../screens/onboardingScreen/OtpScreen';
import constants from '../constants';
import DrawerNavigation from './DrawerNavigation';
import MapViewScreen from '../screens/dashboardScreen/MapViewScreen';
import MutualLikeScreen from '../screens/dashboardScreen/MutualLikeScreen';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={constants.screens.OnboardingScreen}
      component={OnboardingScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.CheckedInScreen}
      component={CheckedInScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.LoginScreen}
      component={LoginScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.SignUpScreen}
      component={SignUpScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.BasicInformationScreen}
      component={BasicInformationScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.ProfileImageChooseScreen}
      component={ProfileImageChooseScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.AccessLoactionScreen}
      component={AccessLoactionScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.OtpScreen}
      component={OtpScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
    <RootStack.Screen
      name={constants.screens.MapViewScreen}
      component={MapViewScreen}
      options={{headerShown: false, gestureEnabled: false}}
    />
  </RootStack.Navigator>
);
const modalLayout = {
  title: '',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  cardStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    opacity: 1,
  },
};
const RootNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <RootStack.Group>
          <Stack.Screen
            name="RootNavigator"
            component={RootNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MutualLikeScreen"
            component={MutualLikeScreen}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigators;
