import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: {
        about: {
          title: string;
          description: string;
        };
        contact: {
          cta: string;
        };
      };
    };
  }
}