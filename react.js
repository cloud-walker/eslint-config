module.exports = {
  plugins: ['react'],
  rules: {
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', {ignoreCase: true}],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
