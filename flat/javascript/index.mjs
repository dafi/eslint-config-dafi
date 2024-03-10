import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import unicorn from 'eslint-plugin-unicorn';
import customJSCode from './eslint-jscode.mjs';
import customJSDoc from './eslint-jsdoc.mjs';
import customImport from './eslint-import.mjs';
import customUnicorn from './eslint-unicorn.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: [
      "**/*.js",
      "**/*.ts"
    ],
    plugins: {
      unicorn,
      jsdoc,
      'import': importPlugin,
    },
    rules: {
      ...jsdoc.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...unicorn.configs['flat/all'].rules,
      ...customJSCode.rules,
      ...customImport.rules,
      ...customJSDoc.rules,
      ...customUnicorn.rules,
    },
  }
];
