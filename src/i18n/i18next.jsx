import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/translation.json';
import az from '../locales/az/translation.json';
import ru from '../locales/ru/translation.json';

const savedLang = localStorage.getItem('i18nextLng') || 'az';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
      ru: { translation: ru },
    },
    lng: savedLang,
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
