module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(png|css)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
