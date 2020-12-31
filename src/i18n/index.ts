import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-react-native-async-storage';
import transEN from './en/translation.json';
import transVI from './vi/translation.json';
import { Platform } from 'react-native';

const languageDetector = Platform.OS !== 'web' ? LanguageDetector('en') : LanguageDetector;
const defaultNamespace = 'translation';

// Define option
// https://www.i18next.com/overview/configuration-options
const options: InitOptions = {
  fallbackLng: 'en',
  defaultNS: defaultNamespace,
  load: 'languageOnly',

  debug: __DEV__,
  keySeparator: false, // Turn off nested translation keys

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true, // Set to true if you like to wait for loaded in every translated hoc
    bindI18n: 'languageChanged', // Set which events trigger a re-render
  },

  initImmediate: false, // Important for SSR to work

  resources: {
    en: {
      translation: transEN,
    },
    vi: {
      translation: transVI,
    },
  },
};

// Initialize i18n
i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .use(languageDetector)
  .init(options, (err, t) => {
    if (err) {
      throw err;
    }

    console.log(t('Language translation is ready!'));
  });

export default i18n;
