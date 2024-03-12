import ngESLint from '@angular-eslint/eslint-plugin';
import customAngular from './eslint-angular.mjs';
import tsESLint from 'typescript-eslint';

export default tsESLint.config(
  ...tsESLint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': ngESLint,
    },
    rules: {
      ...ngESLint.configs.recommended.rules,
      ...customAngular.rules,
    }
  },
);
