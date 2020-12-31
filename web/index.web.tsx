import { name as appName } from '../app.json';
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Root } from 'src/Root';

const App = () => (
  <View style={{ minHeight: '100vh' }}>
    <Root />
  </View>
);

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
