const path = require('path')
// const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        // 'cesium': 'Cesium',
    },
    // 打包规则
    // 参考博客 https://segmentfault.com/a/1190000039934387
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }],
        // }, {
        //     test: /\.(gif|jpe?g|png|svg|xml|json)(\?.*)?$/,
        //     loader: 'url-loader',
        //     options: {
        //         name: '[name]-[hash:5].[ext]',
        //         limit: 4096,
        //         publicPath: '/static',
        //         outputPath: 'static'
        //     }
        // }, {
        //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //     use: [{
        //         loader: 'url-loader',
        //         options: {
        //             name: '[name]-[hash:5].min.[ext]',
        //             limit: 10000,
        //             publicPath: '/fonts',
        //             outputPath: 'fonts'
        //         }
        //     }]
        // }, {
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader']
        // }, {
        //     test: /\.styl(us)?$/,
        //     use: [
        //         'style-loader',
        //         'css-loader',
        //         'postcss-loader',
        //         'stylus-loader'
        //     ]
        }]
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
        // new HtmlWebpackPlugin({
        //     template: path.resolve('src/index.html'),
        //     favicon: path.resolve('public/favicon.ico')
        // }),
        // new HtmlWebpackTagsPlugin({
        //     append: false, ///< 备注：一定要先加载第三方js文件, 最后加载主程序bundle.js
        //     tags: [
        //         path.join('cesium', CESIUM_PACKAGE.version, 'Cesium.js'),
        //     ],
        // }),
        // new webpack.EnvironmentPlugin({
        //     //NODE_ENV: 'production', // 取值 "production" 或 "development"
        //     DEBUG: 'false', // 取值 "true" 或 "false"
        //     BASE_URL: '/',
        //     API_URL: '/api',
        // }),
        // new webpack.DefinePlugin({
        //     CESIUM_BASE_URL: JSON.stringify(path.join('cesium', CESIUM_PACKAGE.version)),
        //     CESIUM_LIB_URL: JSON.stringify(path.join('cesium', CESIUM_PACKAGE.version, 'Cesium.js')),
        // }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {from: path.resolve(CESIUM_PUBLIC_PATH, '..'), to: 'cesium'},
        //     ]
        // }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js',
            // '@': path.resolve(__dirname, '../src'),
            // 'styles': path.resolve(__dirname, '../src/assets/styles'),
            // 'images': path.resolve(__dirname, '../src/assets/images'),
        }
    }
}
