import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { Settings } from 'src/screens/Settings';
import { store } from 'src/store';

describe('Settings', () => {
  jest.useFakeTimers();
  const pageTree = (
    <Provider store={store}>
      <Settings />
    </Provider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
