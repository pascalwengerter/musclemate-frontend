module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      ts: "@typescript-eslint/parser",
    },
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": 0,
  },
};
