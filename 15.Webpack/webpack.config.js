const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = { 
    mode : devMode ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new uglifyJSPlugin({cache:true, parallel:true}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //conflict with the upper loarder- 'style-loader', //Adds CSS to DOM injecting the tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}