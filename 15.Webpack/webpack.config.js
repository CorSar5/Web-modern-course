const webpack = require('webpack')

module.exports = { 
    mode : 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', //Adds CSS to DOM injecting the tag <style>
                'css-loader' //interpreta @import, url()...
            ]
        }]
    }
}