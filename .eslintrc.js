module.exports = {
  plugins: ['prettier'],
  extends: [
    '@antfu/eslint-config-react',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'antfu/if-newline': 'off',
  },
  globals: {
    process: true,
  },
}
