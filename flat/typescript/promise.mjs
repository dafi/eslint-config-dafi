import customPromise from './eslint-promise.mjs';

export default [
  {
    'files': [
      '**/*.ts',
      '**/*.tsx'
    ],
    rules: {
      ...customPromise.rules,
    }
  }
];
