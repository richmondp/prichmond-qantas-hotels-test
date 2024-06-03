import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__test/setup.ts',
  },
});
