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

Add `"extends": "dafi/*"` to your `.eslintrc`

Including all configs

    "extends" : [
      "eslint:recommended",
      "dafi/javascript",
      "dafi/stylistic",
      "dafi/typescript",
      "dafi/angular",
      "dafi/reactjs"
    ],

# Deprecated rules

[Formatting rules have been deprecated](https://eslint.org/blog/2023/10/deprecating-formatting-rules/) since ESLint 8.53.0 

In the future will migrate to [ESLint Stylistic](https://eslint.style/) but for now the rules are present in separated file and use ESLint

Typescript formatting rules are present on `dafi/typescript` and in the future will migrate, too.

# ESLint 7.32.0

Old projects using 7.32.0 must use `dafi/stylistic7`, this is identical to `dafi/stylistic` but it doesn't contain the rule `lines-between-class-members` because is not compatible


