const {base, react} = require('./index.js')

module.exports = Object.assign({}, base, {
  overrides: [Object.assign({}, react, {files: ['playground/react.js']})],
})
