const path = require('path');

const appDirectory = path.resolve(__dirname, '../');

/*
 * This is needed for webpack to compile JavaScript.
 * Many React Native packages are not compiled to ES5 before being published.
 * If you depend on uncompiled packages they may cause webpack build errors.
 * To fix this webpack can be configured to compile to the necessary `node_module`.
 */
const babelLoader = {
  test: /\.(jsx?|tsx?)$/,
  include: [
    path.resolve(appDirectory, 'web'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-flipper'),
    path.resolve(appDirectory, 'node_modules/rn-async-storage-flipper'),
    path.resolve(appDirectory, 'node_modules/reactotron-react-native')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // Keep babel web plugins here so that it doesn't interfere with the app
      plugins: [
        'react-native-web'
      ],
    },
  },
};

/**
 * Load file imports
 */
const imageFilesLoader = {
  test: /\.(png|jpe?g|gif|mp4)$/i,
  use: 'file-loader?name=videos/[name].[ext]',
};

/**
 * Transforms files into base64 URIs.
 */
const imageBase64Loader = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      options: {
        limit: 8192,
      },
    }
  }
};

/**
 * Load fonts
 **/
const fontsLoader = {
  test: /\.(ttf|otf)$/,
  loader: "url-loader",
  include: [
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'app/assets/fonts'),
  ]
};


module.exports = {
  appDirectory,
  babelLoader,
  imageFilesLoader,
  fontsLoader,
  imageBase64Loader,
};