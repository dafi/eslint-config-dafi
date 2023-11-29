# ESLint Config for dafi projects

Code style rules used in all my own projects

I don't know how you arrived here but probably you should ignore this configuration 😜

# Installation

    npm i --save-dev eslint-config-dafi

# Usage

You can use the following configurations 

- Javascript and JSDoc
- Javascript Stylistic (this is separated because contains all rules deprecated in v8.53.0, more details below)
- Typescript
- ReactJS
- Angular
- Angular template (applyed to `*.html` files)

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
