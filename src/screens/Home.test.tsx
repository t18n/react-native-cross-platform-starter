import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
import { Home } from 'src/screens/Home';
import { store } from 'src/store';

describe('Home', () => {
  const pageTree = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
