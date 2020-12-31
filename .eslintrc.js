module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
    'testing-library',
    'jest',
    'react',
    'react-native',
    'import',
    'promise',
    'react-native-a11y',
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended', // Uses rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint', // Disable ESLint rules from @typescript-eslint that conflicts with prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-disabled-tests': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-raw-text': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
  ],
};
