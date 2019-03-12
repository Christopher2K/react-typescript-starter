import path from 'path'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'

import commonConfig from './webpack.common'

const devConfig: Configuration = {
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    overlay: true,
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}

export default merge(
  commonConfig,
  devConfig
)
