import eslint from '@eslint/js';
import tsESLint from "typescript-eslint";
import importESLint from "eslint-plugin-import";
import customTypescript from "./eslint-typescript.mjs";
import customTypescriptStylistic from "./eslint-typescript-stylistic.mjs";

export default tsESLint.config(
    eslint.configs.recommended,
    ...tsESLint.configs.recommended,
    ...tsESLint.configs.strictTypeChecked,
    ...tsESLint.configs.stylistic,
    {
      files: [
        "**/*.ts",
        "**/*.tsx"
      ],
      settings: {
        // needed to avoid the error 'import/no-unresolved'
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true
          }
        }
      },
      plugins: {
        'import': importESLint,
      },
      rules: {
        ...customTypescript.rules,
        ...customTypescriptStylistic.rules,
      }
    }
);
