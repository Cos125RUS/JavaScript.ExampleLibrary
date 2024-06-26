const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'valerii_panov_example_library.js',
        library: 'valerii_panov_example_library',
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