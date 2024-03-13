import ngESLint from '@angular-eslint/eslint-plugin';
import customAngular from './eslint-angular.mjs';
import tsESLint from 'typescript-eslint';

export default [
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': ngESLint,
    },
    rules: {
      ...tsESLint.configs.recommended.rules,
      ...ngESLint.configs.recommended.rules,
      ...customAngular.rules,
    }
  },
];
