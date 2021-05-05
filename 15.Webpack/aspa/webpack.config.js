const webpack  = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const loader = require('sass-loader')

module.exports = {
    mode:  'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port:8080
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                parallel: true,
                terserOptions:{
                    ecma: 6,
                },
            })]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.scss"
        })
    ],
    module:{
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]}
        , {
            test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
        }]
    }
}