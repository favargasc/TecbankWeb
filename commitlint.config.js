module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [0, 'always', 'lower-case'],
    'scope-case': [0, 'always', 'lower-case'],
    'subject-case': [0, 'always', 'lower-case']
  }
}
