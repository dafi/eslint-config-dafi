import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsESLint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import imp from "eslint-plugin-import";
import customTypescript from './eslint-typescript.js';
import customTypescriptStylistic from './eslint-typescript-stylistic.js';
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: [
      "**/*.ts",
      "**/*.tsx"
    ],
    settings: {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        }
      }
    },
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': ts,
      'import': imp,
      '@stylistic': stylistic,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsESLint.config(
          ...tsESLint.configs.recommended,
          ...tsESLint.configs.strictTypeChecked,
          ...tsESLint.configs.stylistic
      ).rules,
      ...customTypescript.rules,
      ...customTypescriptStylistic.rules,
    }
  }
];
