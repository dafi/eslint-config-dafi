import stylistic from '@stylistic/eslint-plugin';
import customStylistic from './eslint-stylistic.mjs';

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...customStylistic.rules,
    }
  }
];
