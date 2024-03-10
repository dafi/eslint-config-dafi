export default {
  rules: {
    "@stylistic/brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "@stylistic/comma-spacing": [
      "error"
    ],
    "@stylistic/func-call-spacing": [
      "error"
    ],
    "@stylistic/indent": [
      "error",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1,
        "ignoredNodes": [
          "JSXElement *",
          "JSXElement",
          "PropertyDefinition"
        ]
      }
    ],
    "@stylistic/keyword-spacing": [
      "error"
    ],
    "@stylistic/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@stylistic/no-extra-parens": [
      "error",
      "all",
      {
        "nestedBinaryExpressions": false
      }
    ],
    "@stylistic/no-extra-semi": [
      "error"
    ],
    "@stylistic/object-curly-spacing": [
      "error",
      "always"
    ],
    "@stylistic/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@stylistic/semi": [
      "error",
      "always"
    ],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/type-annotation-spacing": "error",
  },
};
