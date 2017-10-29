module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {es6: true},
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': 'warn',
    'default-case': ['warn', {commentPattern: '^no default$'}],
    'for-direction': 'error',
    'getter-return': 'warn',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'error',
  },
}
