const path = require('path')

// 返回当前工作目录的上级目录
exports.resolve = function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

exports.APP_PATH = exports.resolve('src')
exports.DIST_PATH = exports.resolve('dist')

exports.getWebpackResolveConfig = function (customAlias = {}) {
    const appPath = exports.APP_PATH
    return {
        modules: [appPath, 'node_modules'],
        extensions: ['.js', '.json'],
        alias: {
            '@': appPath,
            ...customAlias
        }
    }
}