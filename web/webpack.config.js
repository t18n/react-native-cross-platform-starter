const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {
  appDirectory,
  babelLoader,
  imageFilesLoader,
  fontsLoader,
  imageBase64Loader,
} = require('./webpack.loaders.js');

const __DEV__ = process.env.STAGE !== 'production';

module.exports = {
  mode: __DEV__ ? 'development' : 'production',

  // Include generating source map
  devtool: __DEV__ ? 'source-map' : false,

  // Config build entry
  entry: [
    path.resolve(appDirectory, 'web', 'index.web.tsx') // Entry file for web
  ],

  // Configures where the build ends up
  output: {
    filename: 'bundle.web.[contenthash].js',
    chunkFilename: '[id].[chunkhash].js',
    path: path.resolve(appDirectory, '.dist'),
  },

  // Config for dev server
  devServer: {
    contentBase: path.join(__dirname, '.dist'),
    hot: true,
    open: true,
    compress: true,
    publicPath: '/',
    host: '0.0.0.0', // 0.0.0.0 allow server to be accessible externally within LAN
    historyApiFallback: true, // enable to use index.html as 404 fallback - necessary when developing to avoid 404 on paths that exist
  },

  // Module rules
  module: {
    rules: [
      babelLoader,
      imageFilesLoader,
      fontsLoader,
      imageBase64Loader,
    ]
  },

  // Resolve RN packages to packages that supports browser
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'i18next-react-native-async-storage$': 'i18next-browser-languagedetector',
      'react-native-feather': 'react-feather'
    },

    /**
     * If you're working on a multi-platform React Native app, web-specific
     * module implementations should be written in files using the extension
     * `.web.js`.
     * If multiple files share the same name but have different extensions,
     * webpack will resolve the one with the extension listed first in the array and skip the rest.
     */
    extensions: [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.native.js'
    ]
  },

  /**
   * Plugins
   */
  plugins: [
    // Clean your build folder, keep this first
    new CleanWebpackPlugin(),

    // Copy static files
    new CopyPlugin({
      patterns: [
        { from: 'web/robot.txt', to: 'robot.txt' },
      ]
    }),

    // Create HTML file to serve bundle
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, './web/index.html'),
      filename: 'index.html',
    }),

    // Use this to define global variable (for process.env, use EnvironmentPlugin)
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(__DEV__),
    }),

    // Show bundle Analyzer
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'static' : 'disabled',
      openAnalyzer: !!process.env.ANALYZE,
      generateStatsFile: !!process.env.ANALYZE,
    })
  ],

  /**
   * Extract common dependencies into an existing entry chunk or an entirely new chunk.
   */
  optimization: {
    splitChunks: {
      chunks: 'all', // Optimize all dynamically imported module or non-dynamically imported module.
      maxSize: 250000, // try to split chunks bigger than maxSize bytes into smaller parts
      automaticNameDelimiter: '~', // specify the delimiter to use for the generated names
      // Cache groups can inherit and/or override any options from splitChunks
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // optimization will prefer the cache group with a higher priority
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // If the current chunk contains modules already split out from the main bundle, it will be reused instead of a new one being generated
        }
      }
    }
  },

  performance: {
    hints: __DEV__ ? 'warning' : false,
  },
};
