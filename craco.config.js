const WebpackPlugin = require('1-webpack-plugin')
const webpack = require('webpack')
const MyWebpackPlugin = new WebpackPlugin()
module.exports = {
  webpack: {
    alias: {
      // 添加别名或其他Webpack配置
    },
    plugins: [
      // 添加或覆盖Webpack插件
      MyWebpackPlugin,
      new webpack.DefinePlugin({
        CONFIG: {
          COMMITHASH: JSON.stringify(MyWebpackPlugin.commitHash)
        }
      })
    ],
  },
  babel: {
    plugins: [
      // 添加或覆盖Babel插件
    ],
  },
};