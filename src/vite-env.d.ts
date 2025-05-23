//This file helps TypeScript understand the types of your Vite environment variables
//and prevents type errors when using import.meta.env.

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_USER_ID: string;
  // add more variables if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}