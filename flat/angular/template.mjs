import ngESLint from '@angular-eslint/eslint-plugin';
import ngTemplateESLint from '@angular-eslint/eslint-plugin-template';
import ngTemplateParser from '@angular-eslint/template-parser';
import customTemplate from './eslint-angular-template.mjs';

export default [
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: ngTemplateParser,
    },
    plugins: {
      '@angular-eslint': ngESLint,
      '@angular-eslint/template': ngTemplateESLint,
    },
    rules: {
      ...ngESLint.configs.recommended.rules,
      ...ngTemplateESLint.configs.recommended.rules,
      ...customTemplate.rules,
    }
  }
];
