var path = require('path');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = {
    entry: '../src/main/js/server/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: "node",
    externals: [ nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        })
    ]
};
