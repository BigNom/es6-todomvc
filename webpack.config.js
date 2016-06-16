const {resolve} = require('path')
module.exports = () => {
  return {
    entry: './app.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    context: resolve(__dirname, 'src'),
  }
}
