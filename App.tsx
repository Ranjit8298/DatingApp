import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, Component} from 'react';
import RootNavigators from './src/navigator/RootNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import DefaultToast from './src/components/Toast';

type Props = {};
type State = {
  isInternetReachable: boolean;
};

class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isInternetReachable: true,
    };
  }

  onConnectionChange = (state: {isInternetReachable: boolean}) => {
    this.setState({isInternetReachable: state.isInternetReachable});
  };
  componentDidMount() {}
  render() {
    const {isInternetReachable} = this.state;
    return (
      <>
        {isInternetReachable === true && (
          <>
            <RootNavigators />
          </>
        )}

        <DefaultToast />
      </>
    );
  }
}
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
