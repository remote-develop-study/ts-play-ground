module.exports = {
  "bail": true,
  "verbose": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}"
  ],
  // TODO: 경로 수정 필요
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  "transform": {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ]
};
