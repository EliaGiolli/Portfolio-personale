# 🌐 Personal Portfolio – React, TypeScript & Tailwind CSS

Welcome to the repository of my personal portfolio! 🚀 This project is my online space to showcase my projects, my journey in front-end development, and my technical skills.

## ✨ Tech Stack

- **React 19** – For building a dynamic and interactive UI.
- **TypeScript** – For type safety and robust code.
- **Vite** – For fast and optimized development.
- **Tailwind CSS 4** – For modern, responsive, and highly customizable styling.
- **@headlessui/react** – For accessible UI components (modals, dialogs).
- **React Router 7** – For smooth navigation between pages.
- **React Icons** – To enrich the interface with professional icons.
- **React Typed** – For animated typing text effects.
- **React Parallax** – For engaging parallax scrolling effects.
- **React Hook Form** – For flexible and performant forms.
- **React Scroll** – For smooth scrolling navigation.
- **Class Variance Authority & clsx** – For utility-first and conditional class management.
- **EmailJS** – For sending emails directly from the contact form.
- **i18next** – For robust internationalization support.

## 🔧 Getting Started

To explore or contribute to the project, follow these simple steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-portfolio.git
   ```
2. Move into the project directory:
   ```sh
   cd your-portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser at `http://localhost:5173/` (default for Vite).

## 🚀 Main Features

- **Interactive homepage** with animated typing text and parallax effects.
- **About section** to introduce myself, my skills, and experience.
- **Project portfolio page** displaying a grid of projects. Each project card includes an image, title, description, and a button to learn more.
- **Project modal**: Clicking "Learn more" opens a modal with a detailed project description, technology stack (with icons), and direct links to GitHub and live demos. The modal is accessible and styled for both light and dark themes.
- **Contact form** powered by React Hook Form and EmailJS for easy communication.
- **Smooth navigation** with React Router and React Scroll.
- **Responsive design** with Tailwind CSS for all devices.

## 🌍 Internationalization (i18n) Setup

The project implements a robust internationalization system using i18next, supporting multiple languages (English, Italian, and Russian). Here's a detailed breakdown of the i18n implementation:

### Configuration Files

1. **`src/i18n.ts`** - Main i18n configuration file:
   ```typescript
   import i18n from 'i18next';
   import { initReactI18next } from 'react-i18next';
   import LanguageDetector from 'i18next-browser-languagedetector';
   ```
   - Initializes i18next with React integration
   - Uses browser language detection
   - Sets up fallback language (Italian)
   - Configures interpolation and default namespace

2. **`src/i18n.d.ts`** - TypeScript declaration file:
   ```typescript
   import 'i18next';
   import eCommon from './locales/en/common.json'
   ```
   - Provides TypeScript type safety for translations
   - Extends i18next's type definitions
   - Ensures type checking for translation keys

### Translation Structure

Translations are organized in the `src/locales` directory:
```
src/locales/
├── en/
│   └── common.json
├── it/
│   └── common.json
└── ru/
    └── common.json
```

Each language file follows the same structure, making it easy to maintain consistency across translations.

### Type Safety with TypeScript

The project leverages TypeScript to ensure type safety in translations:

1. **Type Definitions**: The `i18n.d.ts` file extends i18next's type system:
   ```typescript
   declare module 'i18next' {
     interface CustomTypeOptions {
       resources: {
         translation: typeof eCommon;
       };
       defaultNS: 'common';
     }
   }
   ```
   This ensures that:
   - Translation keys are type-checked
   - Autocomplete works in your IDE
   - Prevents typos in translation keys

2. **Usage in Components**:
   ```typescript
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation();
     return <h1>{t('navbar.about')}</h1>;
   }
   ```

### Key Features

1. **Automatic Language Detection**:
   - Uses `i18next-browser-languagedetector` to detect user's preferred language
   - Falls back to Italian if the detected language isn't supported

2. **Namespace Organization**:
   - Uses the 'common' namespace for shared translations
   - Structured JSON format for easy maintenance
   - Hierarchical organization of translation keys

3. **Type-Safe Translations**:
   - Full TypeScript support
   - Compile-time checking of translation keys
   - IDE autocomplete support

4. **Easy Language Switching**:
   ```typescript
   const { i18n } = useTranslation();
   i18n.changeLanguage('en'); // Switch to English
   ```

### Best Practices Implemented

1. **Separation of Concerns**:
   - Translation files are separate from application logic
   - Clear directory structure for different languages

2. **Type Safety**:
   - Strong TypeScript integration
   - Compile-time checking of translation keys
   - Prevents runtime errors from missing translations

3. **Maintainability**:
   - Consistent JSON structure across languages
   - Easy to add new languages
   - Clear organization of translation keys

4. **Performance**:
   - Lazy loading of translation files
   - Efficient language switching
   - Browser caching support



## 🎯 Upcoming Updates

- Dedicated projects page to share my learning journey.
- Contact page for collaboration opportunities.
- UI/UX improvements with a focus on dark mode using ContextAPI.
- Further code robustness and scalability with Next.js.
- Unit testing with Jest and React Testing Library

## 📬 Contact

Feel free to reach out or connect with me:
- 💼 [LinkedIn](https://linkedin.com/in/eliagiolli)
- 🐙 [GitHub](https://github.com/EliaGiolli)
- 📧 Email: your-email@example.com

Thank you for visiting my project! 😊

