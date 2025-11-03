import 'reflect-metadata';

// Mock environment variables for testing
Object.assign(process.env, {
  NODE_ENV: 'test',
  PORT: '3003',
  JWT_SECRET: 'test-secret',
  DATABASE_URL: 'postgresql://test:test@localhost:5433/ats_test'
});

// Global test utilities
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};