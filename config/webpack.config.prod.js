// const webpackMerge = require('webpack-merge')
// 新版本已经更新为如下使用
const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')
// terser-webpack-plugin 去掉项目中多余的debugger
const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    stats: { children: false, warnings: false },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        // 是否注释掉console
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true,
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    mangle: true
                },
                parallel: true,
                // sourceMap: false
            })
        ],
        // 公共模块抽取, 避免重复引用
        splitChunks: {
            cacheGroups: {
              commons: {
                name: 'commons',
                chunks: 'initial',
                minChunks: 3,
                enforce: true
              },
            },
          },
    }
})

module.exports = webpackConfig