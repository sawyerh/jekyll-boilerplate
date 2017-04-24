module.exports = {
    "extends": ["nava"],
    "env": {
      "browser": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "camelcase": 0,
      "no-console": 0,
      "no-lonely-if": 2
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
};
