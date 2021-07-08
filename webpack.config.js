const path = require('path')
// const webpack = require('webpack')
const {merge} = require('webpack-merge')
const COMMON = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(COMMON, {
    // mode: 'production',
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin({
    //         test: /\.js(\?.*)?$/i, ///< 匹配参与压缩的文件>
    //         parallel: true, ///< 使用多CPU并发运行 >
    //         /// Terser 压缩配置
    //         terserOptions: {
    //             output: {
    //                 comments: false
    //             }
    //         },
    //         //将注释剥离到单独的文件中
    //         extractComments: true,
    //         compress: {
    //             pure_funcs: [
    //                 "console.log"
    //             ]
    //         }
    //     })],
    // },
    mode: 'development',
    cache: {
        type: 'filesystem',
    },
    // devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
})
