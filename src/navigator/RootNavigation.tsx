import {createNavigationContainerRef} from '@react-navigation/native';

import CommonFunction from '../utils/CommonFunction';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any) {
  if (navigationRef.getCurrentOptions()) {
    navigationRef.navigate(name);
    // CommonFunction.pauseFullscreenLoading();
  }
}
