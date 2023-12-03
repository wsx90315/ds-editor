module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true
  },
  extends: ['@vue/typescript/recommended', 'plugin:vue/vue3-essential', './prettier.config.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'no-param-reassign': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    indent: ['error', 2],
    semi: ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 140,
        ignoreUrls: true
      }
    ],
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 'off'
  }
};
