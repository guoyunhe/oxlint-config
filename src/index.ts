import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';

export default defineConfig({
  extends: [recommended],
  plugins: ['react', 'unicorn', 'typescript'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    'no-console': 'warn',
  },
});
