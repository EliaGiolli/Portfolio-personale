import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
import LanguageDetector from 'i18next-browser-languagedetector';  
import it from './locales/it/common.json'
import en from './locales/en/common.json'; 
import ru from './locales/ru/common.json';  

i18n   
.use(LanguageDetector) 
// Rilevamento automatico lingua   
.use(initReactI18next)   
.init({ resources: { 
	en: { translation: en }, 
	it: { translation: it },           
	ru: { translation: ru },     
	},     
	fallbackLng: 'it', 
	// Se la lingua non è supportata     
	interpolation: {      
		 escapeValue: false, 
		 // React già fa escaping     
		 },   
		 });  
	export default i18n;
