const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = { 
    mode : 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
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