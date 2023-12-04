module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-unused-vars': 2,
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/no-unused-vars': 2,
    'vue/multi-word-component-names': 0
  }
};
