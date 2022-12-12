import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import RootNavigators from './src/navigator/RootNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  },[])
  return (
    <RootNavigators />
  )
};

export default App;