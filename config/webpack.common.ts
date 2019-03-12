import path from 'path'
import { Configuration } from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import TSConfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin'

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TSConfigPathsWebpackPlugin()
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/env', { targets: { browsers: 'last 2 versions' } }],
          '@babel/typescript',
          '@babel/react'
        ],
        plugins: [
          '@babel/proposal-class-properties',
          '@babel/proposal-object-rest-spread',
          ['emotion', {
            sourceMap: true,
            autoLabel: process.env.NODE_ENV !== 'production',
            labelFormat: '[local]',
            cssPropOptimization: true
          }]
        ]
      }
    }, {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new ForkTSCheckerWebpackPlugin({
      tslint: path.resolve(__dirname, '../tslint.json'),
      tslintAutoFix: process.env.NODE_ENV === 'production',
      reportFiles: ['src/**/*.{ts,tsx}']
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true
    })
  ]
}

export default commonConfig
