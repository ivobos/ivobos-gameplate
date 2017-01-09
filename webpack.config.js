var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main/js/client/splash.jsx',
    output: {
        path: 'www',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015']}, exclude: /(node_modules)/ },
            { test: /\.jsx$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}, exclude: /(node_modules)/ }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Gameplate'
    })]
};
