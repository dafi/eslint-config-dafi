export default {
  rules: {
    "@angular-eslint/component-class-suffix": [
      "error",
      {
        "suffixes": [
          "Page",
          "Component"
        ]
      }
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": ["app", "imm"],
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": ["app", "imm"],
        "style": "camelCase"
      }
    ],
    "@angular-eslint/no-empty-lifecycle-method": "off",
    "@angular-eslint/no-outputs-metadata-property": "error"
  }
}
