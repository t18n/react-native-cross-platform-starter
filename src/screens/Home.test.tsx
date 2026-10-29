import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'src/contexts/ThemeContext';
import { Home } from 'src/screens/Home';
import { store } from 'src/store';

describe('Home', () => {
    const pageTree = (
        <Provider store={store}>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </Provider>
    );

    it('Should match snapshot', () => {
        const page = render(pageTree);
        expect(page.toJSON()).toMatchSnapshot();
    });
});
