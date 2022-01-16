import { NavigationAction, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> = React.createRef();

export default class NavigationService {
  public static isReady: boolean;

  public static navigate(name: string, params?: Record<string, unknown>) {
    if (this.isReady && navigationRef.current) {
      navigationRef.current.navigate(name, params);
    } else {
      console.log('App hasn\'t mounted');
    }
  }

  public static dispatch(action: NavigationAction) {
    if (this.isReady && navigationRef.current) navigationRef.current.dispatch(action);
  }
}
