const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')



module.exports = { 
    mode : devMode ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9090
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            })]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //conflict with the upper loarder- 'style-loader', //Adds CSS to DOM injecting the tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]}, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }]
    }
}