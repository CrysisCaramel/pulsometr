const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    hot: true,
    // liveReload: false,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: baseWebpackConfig.externals.paths.dist
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new webpack.HotModuleReplacementPlugin()
    
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
