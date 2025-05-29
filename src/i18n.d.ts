import 'i18next';

import eCommon from './locales/en/common.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      //here we're telling TS that t{} will have the same structure as common.json
      translation: typeof eCommon;
    };
    defaultNS: 'common';
  }
}