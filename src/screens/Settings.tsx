import React from 'react';
import { Platform, Pressable, View, Text, StyleSheet } from 'react-native';
import { useThemeSystem } from 'src/contexts/ThemeContext';
import { useI18n } from 'src/i18n/hooks';

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    theme: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    languages: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    action: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
        borderRadius: 4,
    },
    actionText: {
        fontSize: 16,
    },
    footer: {
        marginTop: 40
    }
})

export const Settings = () => {
    const { t, changeLanguage } = useI18n();
    const { theme, toggleTheme } = useThemeSystem();

    const platform = Platform.select({
        ios: t('home.text.platform.ios'),
        android: t('home.text.platform.android'),
        web: t('home.text.platform.web'),
        macos: t('home.text.platform.macos'),
        windows: t('home.text.platform.windows'),
    });

    return (
        <View style={[styles.container, { backgroundColor: theme.palette.background }]}>
            <View style={styles.theme}>
                <Text style={{ color: theme.palette.onBackground }}>Theme: </Text>
                <Pressable
                    accessibilityRole="button"
                    onPress={toggleTheme}
                    style={styles.action}
                >
                    <Text style={[styles.actionText, { color: theme.palette.onBackground }]}>
                        {String(theme.paletteName === 'light' ? t('Light') : t('Dark'))}
                    </Text>
                </Pressable>
            </View>
            <View style={styles.languages}>
                <Pressable accessibilityRole="button" onPress={() => changeLanguage('en')} style={styles.action}>
                    <Text style={[styles.actionText, { color: theme.palette.onBackground }]}>{String(t('english'))}</Text>
                </Pressable>
                <Pressable accessibilityRole="button" onPress={() => changeLanguage('vi')} style={styles.action}>
                    <Text style={[styles.actionText, { color: theme.palette.onBackground }]}>{String(t('vietnamese'))}</Text>
                </Pressable>
            </View>
            <Text style={[styles.footer, { color: theme.palette.onBackground }]} accessibilityRole="header" aria-level="2">
                {platform}
            </Text>
        </View>
    );
}
