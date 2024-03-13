import stylistic from '@stylistic/eslint-plugin';
import customStylistic from './eslint-stylistic.mjs';

export default [
  {
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.tsx',
    ],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...customStylistic.rules,
    }
  }
];
