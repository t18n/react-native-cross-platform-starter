module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

/**
 * Plugins: Order of including these plugins matters
 */
  plugins: [
    // ES Features
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-optional-chaining', {}],

    // Module resolver
    ['module-resolver', {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
        },
      },
    ],
  ],

  env: {
    production: {
      plugins: [
        'transform-remove-console',
      ],
    },
  },
};
