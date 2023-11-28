module.exports = {
  "extends" : [
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "./eslint-angular.json"
  ],
  "plugins" : [
  ],
  "overrides": [
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
};
