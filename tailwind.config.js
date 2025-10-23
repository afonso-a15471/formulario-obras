import { AgoraTailwindConfig } from '@ama-pt/agora-design-system';
//import type { Config } from 'tailwindcss';

const TailwindConfig = {
  content: ['src/**/*.{ts,tsx}'],
  theme: AgoraTailwindConfig.theme,
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: {
    preflight: false
  }
};

module.exports = TailwindConfig;

/** @type {import('tailwindcss').Config} */
/*
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/