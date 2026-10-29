module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.macos.js', '.windows.js', '.ios.js', '.android.js', '.web.js', '.js', '.ts', '.tsx', '.json'],
      alias: { src: './src' },
    }],
  ],

  env: {
    production: {
      plugins: [
        'transform-remove-console',
      ],
    },
  },
};
