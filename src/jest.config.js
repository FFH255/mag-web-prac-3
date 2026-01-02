/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'], // где искать тесты
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};
