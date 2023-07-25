module.exports = {
  root: true,
  extends: '@react-native',

  
// .eslintrc.js

'prettier/prettier': [
  'error',
  {
    arrowSpacing: ['error', { before: true, after: true }],
    singleQuote: true,
    semi: false,
    useTabs: false,
    tabWidth: 2,
    trailingComma: 'none',
    printWidth: 80,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto'   // 이 부분이 lf로 되어있다면 auto로 변경 
  }
]

};
