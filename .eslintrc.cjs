/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: false,
  env: {
    node: false
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
    // 'plugin:prettier/recommended'

  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
  },
  // parserOptions: {
  //   // parsar: '@typescript-eslint/parsar',
  //   // ecmaVersion: 2020,
  //   // sourceType: 'module'

  // },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}