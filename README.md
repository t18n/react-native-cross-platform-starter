# React Native Cross-platform Apps
Starter project for iOS, Android, macOS, Windows, Linux, and web.

## Requirements
- Node.js 22 or newer and Yarn 1.22 or newer.
- Xcode and CocoaPods for iOS/macOS development.
- Android Studio and the Android SDK for Android development.
- Windows 10/11 with the React Native Windows development dependencies and Visual Studio 2022 for Windows builds. Windows apps cannot be built on macOS.

## Install
```sh
yarn install
yarn app:dep
```

`yarn app:dep` installs CocoaPods for iOS and macOS. On Windows, install the Windows prerequisites from the [React Native Windows guide](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

## Run
Start Metro in one terminal:
```sh
yarn app:start
```

Run a platform in another terminal:
```sh
yarn ios
yarn android
yarn macos
yarn windows
yarn web:dev
```

`yarn macos` requires macOS. `yarn windows` requires Windows and Visual Studio. For Windows packaging, open `windows/rnStarter.sln` in Visual Studio and build the Release configuration. The native desktop targets were initialized with React Native Windows' New Architecture template.

## Linux
The Linux app is the web build packaged in an Electron shell located in `linux/` (not native UI).
```sh
yarn linux:install   # install the shell's dependencies
yarn linux:dev       # build the web bundle and open it in Electron
yarn linux:build     # produce linux/dist/*.AppImage and *.deb
```
Before publishing, replace the placeholder `maintainer` in `linux/electron-builder.yml`, update `homepage` in `linux/package.json`, and add an app icon. CI (`.github/workflows/linux.yml`) builds the packages and runs a headless smoke test.

## Project Scripts
- `yarn typecheck`, `yarn lint`, and `yarn test` run the static checks and Jest suite.
- `yarn web:build` creates the web production bundle.
- `yarn ios:pod:install` and `yarn macos:pod:install` install Apple platform pods.

## Deep Linking
Update the prefixes in `src/routes/linking.ts` and the platform URL configuration for your app domains. See the [React Navigation deep linking guide](https://reactnavigation.org/docs/deep-linking/).

## Platforms
- iOS and Android use the React Native CLI.
- macOS uses [React Native macOS](https://microsoft.github.io/react-native-macos/docs/getting-started).
- Windows uses [React Native Windows](https://microsoft.github.io/react-native-windows/docs/getting-started/).
- Web uses React Native Web and Webpack.
- Linux wraps the web build in Electron.

## License
This project is licensed under MIT License.
