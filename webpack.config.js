var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main/js/client/splash.js',
    output: {
        path: 'www',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Gameplate'
    })]
};
