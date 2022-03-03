// const webpackMerge = require('webpack-merge')
// 新版本已经更新为如下使用
const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
    // 模式
    mode: 'development',
    // 调试配置
    devtool: 'eval-source-map',
    // webpack输入的日志消息不需要传递出来
    stats: { children: false }
})

module.exports = webpackConfig