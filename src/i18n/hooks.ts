import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (languageId: string) => i18n.changeLanguage(languageId, (err: any, t: any) => {
    if (err) return console.log('Cannot change language', err);
    t('Language ready'); // -> same as i18next.t
  })

  return {
    changeLanguage,
    i18n,
    t
  }
}