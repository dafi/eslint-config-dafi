export default {
  rules: {
    // this is useful on JS code but on TS it's better to set noImplicitReturns in tsconfig.json
    "consistent-return": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-restricted-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/class-literal-property-style": [
      "error",
      "fields"
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "record"
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "off"
    ],
    "@typescript-eslint/consistent-type-exports": [
      "off"
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        "ignoreArrowShorthand": true
      }
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        "ignoreEnums": true,
        "ignore": [
          -1,
          0,
          1,
          100,
        ],
        "enforceConst": true
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true
      }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        "allowBoolean": true,
        "allowNumber": true
      }
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "error"
    ],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        "allowArgumentsExplicitlyTypedAsAny": true
      }
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "no-throw-literal": "off",
    "@typescript-eslint/only-throw-error": "error",
    "@typescript-eslint/no-this-alias": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": [
      "error"
    ],
    "@typescript-eslint/no-implied-eval": [
      "error"
    ],
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-dupe-class-members": [
      "error"
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^\\$event|^_|^err$|^args$",
        "varsIgnorePattern": "^_"
      }
    ]
  }
};
