import globals from 'globals';
import customJS from './flat/javascript/index.mjs';
import customTypescript from './flat/typescript/index.mjs';
import customReact from './flat/reactjs/index.mjs';
import customStylistic from './flat/stylistic/index.mjs';

import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'eslint.config.js',
      'vite.config.ts',
      'dist/'
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        project: [
          'tsconfig.json'
        ],
      }
    },
  },
  ...customJS,
  ...customTypescript,
  ...customReact,
  ...customStylistic,
  {
    plugins: {
    },
    rules: {
    },
  }
];
