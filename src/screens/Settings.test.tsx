import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'src/contexts/ThemeContext';
import { Settings } from 'src/screens/Settings';
import { store } from 'src/store';
import { Platform } from 'react-native';

describe('Settings', () => {
    const pageTree = (
        <Provider store={store}>
            <ThemeProvider>
                <Settings />
            </ThemeProvider>
        </Provider>
    );

    it('Should match snapshot', () => {
        const page = render(pageTree);
        expect(page.toJSON()).toMatchSnapshot();
    });

    it('defines labels for macOS and Windows', () => {
        const select = jest.spyOn(Platform, 'select');
        render(pageTree);
        expect(select).toHaveBeenCalledWith(expect.objectContaining({
            macos: 'home.text.platform.macos',
            windows: 'home.text.platform.windows',
        }));
        select.mockRestore();
    });
});
