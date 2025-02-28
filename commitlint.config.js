// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'], // 确保安装此包
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
  },
}
