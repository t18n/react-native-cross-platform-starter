/** Link prefixes/domains for deep linking */
const linkingPrefixes = [
  'https://rnStarter.app',
  'rnStarter://',
];

// FIXME: Better type
export const linking = {
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
