# ESLint Config for dafi projects

Code style rules used in all my own projects

I don't know how you arrived here but probably you should ignore this configuration 😜

# Add ESLint to a project

    npm init @eslint/config

# Usage

You can use the following configurations 

- Javascript and JSDoc
- Javascript Stylistic (this is separated because contains all rules deprecated in v8.53.0, more details below)
- Typescript
- ReactJS
- Angular
- Angular template (applied to `*.html` files)

# Flat config

### Installation

    npm i --save-dev eslint-config-dafi
    npm i --savedev globals

### JS/TS/React `eslint.config.js` example

```javascript
    import globals from "globals";
    import customJS from 'eslint-config-dafi/flat/javascript/index.mjs';
    import customTypescript from 'eslint-config-dafi/flat/typescript/index.mjs';
    import customReact from 'eslint-config-dafi/flat/reactjs/index.mjs';
    import customStylistic from 'eslint-config-dafi/flat/stylistic/index.mjs';
    
    /** @type {import('eslint').Linter.FlatConfig[]} */
    export default [
      ...customJS,
      ...customTypescript,
      ...customReact,
      ...customStylistic,
      {
        ignores: ['eslint.config.js'],
      },
      {
        languageOptions: {
          globals: {
            ...globals.browser,
          },
          parserOptions: {
            project: [
              "tsconfig.json"
            ],
            ecmaFeatures: {
              jsx: true
            },
            ecmaVersion: 2018,
            sourceType: "module"
          },
        },
      },
    ];
```

### Angular `eslint.config.js` example

```javascript
import globals from "globals";

import customJS from 'eslint-config-dafi/flat/javascript/index.mjs';
import customTypescript from 'eslint-config-dafi/flat/typescript/index.mjs';
import customStylistic from 'eslint-config-dafi/flat/stylistic/index.mjs';

import customPromise from 'eslint-config-dafi/flat/typescript/promise.mjs';
import customAngular from 'eslint-config-dafi/flat/angular/index.mjs';
import customAngularTemplate from 'eslint-config-dafi/flat/angular/template.mjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...customJS,
  ...customTypescript,
  ...customStylistic,
  ...customPromise,
  ...customAngular,
  ...customAngularTemplate,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: [
          "tsconfig.json",
        ],
        ecmaVersion: 2018,
        sourceType: "module"
      },
    },
  },
];
```

# Legacy config

### Installation

    npm i --save-dev eslint-config-dafi

    npm i --save-dev eslint-plugin-unicorn@latest

Add `"extends": "dafi/*"` to your `.eslintrc`

Including all configs (be careful to include angular **OR** react not both)

    "extends" : [
      "eslint:recommended",
      "dafi/javascript",
      "dafi/stylistic",
      "dafi/typescript",
      "dafi/typescript/promise",
      "dafi/angular",
      "dafi/reactjs"
    ],


# Angular

Angular requires some special setup.

Add the following config to apply to `*.ts` files

    "overrides": [
        ...
        {
          "files": ["*.ts"],
          },
          "extends": [
            "dafi/angular"
          ]
        }
      ]


Add the following config to apply to `*.html` templates files.

Add this config to fix the error `ESLint: Parsing error: Unexpected token <` on IntelliJ

    "overrides": [
        ...
        {
          "files": ["*.html"],
          "extends": [
            "dafi/angular/template"
          ]
        }
    ]

# Deprecated rules

[Formatting rules have been deprecated](https://eslint.org/blog/2023/10/deprecating-formatting-rules/) since ESLint 8.53.0 

In the future will migrate to [ESLint Stylistic](https://eslint.style/) but for now the rules are present in separated file and use ESLint

Typescript formatting rules are present on `dafi/typescript` and in the future will migrate, too.

# Publish on npmjs.com

    npm publish
