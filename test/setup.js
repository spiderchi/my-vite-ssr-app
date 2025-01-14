import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Fetch API
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);

// Example global variable
globalThis.__DEV__ = true;

// Set up environment variables
process.env.API_URL = 'http://0.0.0.0:3000';
