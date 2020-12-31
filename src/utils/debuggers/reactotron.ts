import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native'
import ReactotronFlipper from "reactotron-react-native/dist/flipper"

if (__DEV__) {
  Reactotron.configure({
    name: "Brightizen",
    createSocket: path => new ReactotronFlipper(path),
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: () => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .setAsyncStorageHandler?.(AsyncStorage) // Avoid creating new conn every refresh
  .connect(); // let's connect!
}