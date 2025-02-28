module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersiion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  // ...其他配置
  settings: {
    react: {
      version: 'detect', // 自动检测 package.json 中的 React 版本
      // 或手动指定版本：
      // version: "18.2.0"  // 替换为你的实际版本
    },
  },
}
