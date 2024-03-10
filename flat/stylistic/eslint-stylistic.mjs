export default {
  rules: {
    "@stylistic/arrow-parens": [
      "off",
      "always"
    ],
    "@stylistic/brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "@stylistic/comma-dangle": "off",
    "@stylistic/eol-last": "error",
    "@stylistic/indent": [
      "error",
      2
    ],
    "@stylistic/linebreak-style": [
      "error",
      "unix"
    ],
    "@stylistic/lines-between-class-members": [
      "error",
      {
        "enforce": [
          {"blankLine": "always", "prev": "method", "next": "*"},
          {"blankLine": "always", "prev": "field", "next": "method"}
        ]
      }
    ],
    "@stylistic/max-len": [
      "error",
      {
        "ignoreUrls": true,
        "ignorePattern": "^import |^export \\{(.*?)\\}|^\\s*console\\.(log|info|warn|error)",
        "code": 140
      }
    ],
    "@stylistic/new-parens": "error",
    "@stylistic/no-multi-spaces": "error",
    "@stylistic/no-multiple-empty-lines": "error",
    "@stylistic/no-trailing-spaces": "error",
    "@stylistic/quote-props": [
      "error",
      "as-needed"
    ],
    "@stylistic/quotes": [
      "off",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@stylistic/semi": [
      "error",
      "always"
    ],
    "@stylistic/space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "@stylistic/spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ]
  }
};
