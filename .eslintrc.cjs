module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:vue/vue3-recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    "vue",
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    indent: [
      "error",
      2
    ],
    semi: [
      "error",
      "always"
    ],
    "max-len": [
      "error",
      {
        "code": 140,
        "ignoreUrls": true
      }
    ]
  }
}
