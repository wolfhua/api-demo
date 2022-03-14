const path = require('path')
const utils = require('./utils')
// const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackconfig = {
    target: 'node',
    // 入口
    entry: {
        server: path.join(utils.APP_PATH, 'index.js')
    },
    resolve: {
        ...utils.getWebpackResolveConfig()
    },
    // 输出
    output: {
        filename: '[name].bundle.js',
        path: utils.DIST_PATH
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }
        ]
    },
    externals: [nodeExternals()],
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        // 在webpack3或者以下，需要使用插件webpack自带插件DefinePlugin来配置process.env.NODE_ENV。
        // 在webpack4中可以通过 mode 来配置，详见webpack.config.dev.js 和webpack.config.prod.js中mode选项
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
        //     }
        // })
    ],
    node: {
        // console: true,
        global: true,
        // process: true,
        // Buffer: true,
        __filename: true,
        __dirname: true,
        // setImmediate: true,
        // path: true
    }
}

module.exports = webpackconfig