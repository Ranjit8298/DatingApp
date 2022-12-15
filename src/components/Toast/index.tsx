import React, {PureComponent} from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import constants from '../../constants';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: constants.colors.shamrock}}
      text2Style={{
        fontSize: constants.vw(12),
        fontWeight: 'bold',
        color:constants.colors.black
      }}
      text2NumberOfLines={2}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      text2Style={{
        fontSize: constants.vw(12),
        fontWeight: '600',
        color:constants.colors.black,
      }}
      text2NumberOfLines={2}
    />
  ),
};

export default class DefaultToast extends PureComponent {
  render() {
    return (
      <Toast
        visibilityTime={3000}
        config={toastConfig}
        ref={(ref: any) => Toast.setRef(ref)}
      />
    );
  }
}
