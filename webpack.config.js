var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        splash : './src/main/js/client/splash.jsx',
        client : './src/main/js/client/clientMain.jsx'
    },
    output: {
        path: 'www',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015']}, exclude: /(node_modules)/ },
            { test: /\.jsx$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}, exclude: /(node_modules)/ },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=material-design-icons/iconfont/[name].[ext]' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Gameplate'
    })]
};
