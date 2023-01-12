export default {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!@?lit)"],
  testEnvironment: "jsdom",
};
