import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const LANG = import.meta.env.VITE_LANG;
const FALLBACK_LANG = import.meta.env.VITE_FALLBACK_LANG;

console.log('====================================');
console.log(LANG);
console.log('====================================');
i18n
    .use(initReactI18next)
    //.use(LanguageDetector) if need to detect from browser itself
    .use(Backend)
    .init({
        debug: true,
        lng: LANG, // Default language
        fallbackLng: FALLBACK_LANG, // Fallback language if translation not found
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
    });

export default i18n;
