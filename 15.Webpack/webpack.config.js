const webpack = require('webpack')

module.exports = { 
    mode : 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    }
}