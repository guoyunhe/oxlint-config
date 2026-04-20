import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'unicorn', 'typescript'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
});
