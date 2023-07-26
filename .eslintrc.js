module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'airbnb-base',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'linebreak-style': 0,
      quotes: 0,
      semi: 0,
      'no-underscore-dangle': 0,
      'no-console': 1,
      'max-len': 0,
      'vars-on-top': 1,
      'prefer-const': 1,
      'no-plusplus': 1,
      'no-return-await': 1,
      'consistent-return': 0,
    },
    ignorePatterns: ['src/*'],
  };
  