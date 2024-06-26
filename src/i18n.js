import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import En from '../public/locales/en/translation.json';
import Ru from '../public/locales/ru/translation.json';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources: {
    en: { translation: En }, 
    ru: { translation: Ru }}
  });
export default i18n;