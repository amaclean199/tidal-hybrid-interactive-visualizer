let path = require('path');

module.exports = {
    entry: {
        'index': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, ''),
    },
    devServer: {
        contentBase: path.join(__dirname, '')
    }
};
