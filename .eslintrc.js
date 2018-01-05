const base = require('./index.js')
const react = require('./react.js')

module.exports = Object.assign({}, base, {
  overrides: [Object.assign({}, react, {files: ['playground/react.js']})],
})
