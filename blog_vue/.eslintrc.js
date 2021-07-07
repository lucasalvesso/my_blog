module.exports = {
  ignorePatterns: ['node_modules/**', '.eslintrc.js'],
  env: {
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:vue/essential', 'vuetify'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
        'vuetify/no-deprecated-classes': 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['sort-keys-fix'],
  root: true,
  rules: {
    camelcase: 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-warning-comments': [1, { location: 'start', terms: ['todo', 'fixme'] }],
    semi: [2, 'always'],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    'vue/no-unused-vars': 'off',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-deprecated-classes': 'off',
    'vuetify/no-legacy-grid': 'error',
    'prettier/prettier': 'off',
  },
};
