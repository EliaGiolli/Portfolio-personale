import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
import LanguageDetector from 'i18next-browser-languagedetector';  
import it from './locales/it/common.json'
import en from './locales/en/common.json'; 
import ru from './locales/ru/common.json';  
import esp from './locales/esp/common.json'

i18n   
.use(LanguageDetector) 
.use(initReactI18next)   
.init({ resources: { 
	en: { common: en }, 
	it: { common: it },           
	ru: { common: ru },
	es: { common: esp }     
	},     
	fallbackLng: 'it', 
	interpolation: {      
		 escapeValue: false, 
		 }, 
		defaultNS: 'common'
	 });  
	export default i18n;
