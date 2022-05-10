module.exports = {
  plugins: ['prettier'],
  extends: ['@antfu/react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'antfu/if-newline': 'off',
  },
}
