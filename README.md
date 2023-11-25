# ESLint Config for dafi projects

Code style rules used in all my own projects

# Usage

There are 4 different config

- Javascript and JSDoc
- Typescript
- ReactJS
- Angular

Add `"extends": "dafi/*"` to your `.eslintrc`

Including all configs

    "extends" : [
    "eslint:recommended",
    "dafi/javascript",
    "dafi/typescript",
    "dafi/angular",
    "dafi/reactjs"
    ],

