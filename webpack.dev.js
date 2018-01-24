const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\*$/, to: '/dist/index.html' }
            ]
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("main.css")
    ]
})