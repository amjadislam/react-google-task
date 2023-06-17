module.exports = {
  roots: [
    '<rootDir>/packages/frontend',
    '<rootDir>/packages/api',
    '<rootDir>/packages/components'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: [
    '<rootDir>/packages/frontend/setupTests.ts',  // if you have a setup file for frontend
    '<rootDir>/packages/api/setupTests.ts',       // if you have a setup file for api
    '<rootDir>/packages/components/setupTests.ts' // if you have a setup file for components
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/components/tsconfig.json', // replace with the actual path to your tsconfig.json file in the components directory
    },
  },
};
