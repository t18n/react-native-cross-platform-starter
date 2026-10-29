import 'isomorphic-fetch';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest';

jest.useFakeTimers();
jest.runAllTimers();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
