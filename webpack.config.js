const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'myLib.js',
        library: 'myLib',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    externals: {
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            root: 'moment'
        }
    }
};