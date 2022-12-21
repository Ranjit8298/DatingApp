import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

/**
 * Stack Navigator types.
 */
export type RootStackParamList = {
  RootNavigator: undefined;
  OnboardingScreen: undefined;
  CheckedInScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  BasicInformationScreen: undefined;
  ProfileImageChooseScreen: undefined;
  AccessLoactionScreen: undefined;
  OtpScreen: undefined;
  MapViewScreen: undefined;
};

/**
 * RootStack all registered screens.
 */
export type Screens =
  | 'RootNavigator'
  | 'OnboardingScreen'
  | 'CheckedInScreen'
  | 'LoginScreen'
  | 'SignUpScreen'
  | 'BasicInformationScreen'
  | 'ProfileImageChooseScreen'
  | 'AccessLoactionScreen'
  | 'OtpScreen'
  | 'MapViewScreen';

/**
 * Generic navigation props interface for all screens.
 */
type ScreensRouteProp = RouteProp<RootStackParamList, Screens>;
type ScreensNavigationProp = StackNavigationProp<RootStackParamList, Screens>;

export interface GenericNavigationProps {
  route?: ScreensRouteProp | undefined;
  navigation: ScreensNavigationProp;
}

export interface GenericNavigationPropOnly {
  navigation: ScreensNavigationProp;
}

export interface GenericRoutePropOnly {
  route: ScreensRouteProp;
}
