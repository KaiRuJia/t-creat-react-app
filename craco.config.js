const WebpackPlugin = require('./MyWebpackPlugin')
const webpack = require('webpack')
const MyWebpackPlugin = new WebpackPlugin()
console.log(JSON.stringify(MyWebpackPlugin.commitHash), '999')
module.exports = {
  webpack: {
    alias: {
      // 添加别名或其他Webpack配置
    },
    plugins: [
      // 添加或覆盖Webpack插件
    ],
  },
  babel: {
    plugins: [
      // 添加或覆盖Babel插件
      MyWebpackPlugin,
      // new webpack.DefinePlugin({
      //   CONFIG: {
      //     COMMITHASH: JSON.stringify(MyWebpackPlugin.commitHash)
      //   }
      // })
    ],
  },
};