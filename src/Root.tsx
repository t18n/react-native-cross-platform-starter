import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'src/routes/Router';
import { persistor, store } from 'src/store';
import { enableScreens } from 'react-native-screens';
import { Platform } from 'react-native';
import { ThemeProvider } from './contexts/ThemeContext';
import { initI18n } from './i18n';

// Optimize React Navigation: https://reactnavigation.org/docs/react-native-screens/
enableScreens(Platform.OS !== 'macos');

export const Root = () => {
    initI18n();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <Router />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};
