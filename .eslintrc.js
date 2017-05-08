// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'indent': 0,
    'no-plusplus': 0,
    'global-require': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'brace-style': 0,
    'comma-dangle': 0,
    'object-curly-spacing': 0,
    'keyword-spacing': 0,
    'no-restricted-syntax': 1,
    'no-shadow': 1,
    'no-bitwise': 1,
    'no-else-return': 0,
    'no-useless-return': 1,
    'no-param-reassign': 0,
    'no-nested-ternary': 1,
    'no-multi-assign': 1,
    'no-return-assign': 1,
    'space-before-function-paren': 0,
    'arrow-parens': 1,
    'no-console': 1,
    'max-len': 0,
    'one-var': 0,
    'eol-last': 0,
    'no-extra-semi': 0,
    'global-require': 0
  }
}
