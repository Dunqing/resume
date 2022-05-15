module.exports = {
  plugins: ['prettier'],
  extends: ['@antfu/react', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'antfu/if-newline': 'off',
  },
}
