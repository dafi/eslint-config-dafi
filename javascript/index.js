module.exports = {
  "extends" : [
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:unicorn/all",
    "./eslint-jscode.json",
    "./eslint-jsdoc.json",
    "./eslint-unicorn.json"
  ],
  "plugins" : [
    "jsdoc",
    "import",
    "unicorn"
  ]
};
