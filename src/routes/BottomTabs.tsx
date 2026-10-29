import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home as HomeIcon, Settings as SettingsIcon } from 'lucide-react-native';
import { Home } from 'src/screens/Home';
import { Settings } from 'src/screens/Settings';
import { useThemeSystem } from 'src/contexts/ThemeContext';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    const { t } = useTranslation();
    const { theme } = useThemeSystem();

    return (
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen
                name="HomeStack"
                component={Home}
                options={{
                    tabBarLabel: t('home'),
                    tabBarIcon: ({ focused, color, size }) => (
                        <HomeIcon size={size} color={focused ? theme.palette.onBackgroundTint : color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: t('settings'),
                    tabBarIcon: ({ focused, color, size }) => (
                        <SettingsIcon size={size} color={focused ? theme.palette.onBackgroundTint : color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
