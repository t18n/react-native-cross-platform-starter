import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RNBootSplash from 'react-native-bootsplash';
import { Home } from 'src/screens/Home';
import { Settings } from 'src/screens/Settings';
import { sleep } from '../utils/async';
import { useThemeSystem } from 'src/contexts/ThemeContext';
import { Icon } from 'react-native-eva-icons';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { t } = useTranslation();
  const { theme } = useThemeSystem();

  const init = async () => {
    await sleep(1000);
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="HomeStack"
        component={Home}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home-outline"
              width={size}
              height={size}
              fill={focused ? theme.palette.onBackgroundTint : color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="settings-outline"
              width={size}
              height={size}
              fill={focused ? theme.palette.onBackgroundTint : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
