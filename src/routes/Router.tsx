import React, { useEffect } from 'react';
import { linking } from './linking';
import { BottomTabs } from './BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService, { navigationRef } from 'src/services/Navigation';

export const Router = () => {
  useEffect(() => {
    NavigationService.isReady = false;
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => { NavigationService.isReady = true; }}
    >
      <BottomTabs />
    </NavigationContainer>
  );
};