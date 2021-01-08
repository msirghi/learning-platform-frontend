import React from 'react';

module.exports = {
  // collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: ['/common/enums.ts', 'next.config.js', '/common/testUtils.ts', 'next.config.ts'],
  testURL: 'http://test.com/login'
};
