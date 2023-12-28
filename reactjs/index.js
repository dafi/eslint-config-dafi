module.exports = {
  "extends" : [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "./eslint-react.json"
  ],
  "plugins" : [
    "react",
    "react-hooks"
  ],
  "overrides" : [
    {
      "files" : [
        "src/**/*.tsx"
      ],
      "rules" : {
        "max-lines-per-function" : [
          "error",
          200
        ],
        "unicorn/consistent-function-scoping": "off",
        "unicorn/no-null": "off"
      }
    }
  ],
};
