/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ENV: 'development' | 'production' | 'sit';
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  