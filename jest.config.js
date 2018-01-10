module.exports = {
  "verbose": true,
  "testMatch": [
    "**/src/**/?(*.)(spec).ts?(x)"
  ],
  "transform": {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ]
};
