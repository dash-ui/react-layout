const path = require('path')

module.exports = {
  // testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  snapshotSerializers: ['@-ui/jest'],
  moduleNameMapper: {
    'test-utils': '<rootDir>/test/test-utils.tsx',
  },
  setupFilesAfterEnv: [require.resolve('./test/setup.js')],
  snapshotResolver: require.resolve('./test/resolve-snapshot.js'),
  // coverageThreshold: {
  //   global: {
  //     statements:17,
  //     branches: 4,
  //     lines: 17,
  //     functions: 20
  //   }
  // },
  globals: {
    __DEV__: true,
  },
}
