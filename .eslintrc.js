module.exports = {
  extends: ["nava"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  }
};
