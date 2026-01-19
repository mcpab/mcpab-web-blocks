// jest.config.js
/** @type {import("jest").Config} */
export default {
  testEnvironment: "node",

  // ESM preset so ESM deps like d3-hierarchy work
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // Put ts-jest config here (new recommended way)
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },

  moduleNameMapper: {
    // ✅ your TS alias: src/... -> <rootDir>/src/...
    "^src/(.*)$": "<rootDir>/src/$1",

    // Helpful for ESM-style relative imports ending in .js
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
