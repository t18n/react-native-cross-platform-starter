import { LinkingOptions } from '@react-navigation/native';

/** Link prefixes/domains for deep linking */
const linkingPrefixes = [
  'https://brightizen.app',
  'brightizen://',
];

export const linking: LinkingOptions = {
  prefixes: linkingPrefixes,
  config: {
    screens: {
      HomeStack: {
        path: "home",
        initialRouteName: "Home",
        screens: {
          Home: "/",
          Profile: {
            path: "user/:id",
          },
        },
      },
      Settings: "settings",
    },
  },
};
