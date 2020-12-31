import AsyncStorage from '@react-native-community/async-storage';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';

if (__DEV__) {
  RNAsyncStorageFlipper(AsyncStorage);
}