import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeSystem } from 'src/contexts/ThemeContext';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
})

export const Home = () => {
  const { t } = useTranslation();
  const { theme } = useThemeSystem();

  return (
    <View style={[styles.container, { backgroundColor: theme.palette.background }]}>
      <Text
        style={[styles.text, { color: theme.palette.onBackground }]}
        accessibilityRole="header"
        aria-level="2"
      >
        {t('Home')}
      </Text>
    </View>
  );
};
