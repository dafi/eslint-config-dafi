module.exports = {
  "extends" : [
    "eslint:recommended",
    "plugin:import/typescript"
  ],
  "parser" : "@typescript-eslint/parser",
  "plugins" : [
    "@typescript-eslint"
  ],
  "overrides" : [
    {
      // Moved inside the overrides section to avoid errors reported
      // on js files using @typescript-eslint/* rules
      "files" : [
        "**/*.ts",
        "**/*.tsx"
      ],
      "extends" : [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "./eslint-typescript.json"
      ]
    }
  ],
  "settings" : {
    "react" : {
      "version" : "detect"
    },
    // taken from https://github.com/import-js/eslint-import-resolver-typescript#configuration
    "import/parsers" : {
      "@typescript-eslint/parser" : [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver" : {
      "typescript" : {
        "alwaysTryTypes" : true
      }
    }
  }
};
