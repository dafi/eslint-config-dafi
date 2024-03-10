import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from "eslint-plugin-unicorn";
import custom from './eslint-react.mjs';
import customStylistic from './eslint-react-stylistic.mjs';
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
    ],
    settings: {
      "react": {
        "version": "detect"
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@stylistic': stylistic,
    },
    rules: {
      ...reactRecommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactJSXRuntime.rules,
      ...custom.rules,
      ...customStylistic.rules,
    }
  },
  {
    files: [
      "**/*.tsx",
    ],
    plugins: {
      unicorn,
    },
    rules: {
      "max-lines-per-function": [
        "error",
        200
      ],
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-null": "off",
    }
  },
];

