// webpack.config.js
const webpack = require('webpack');

module.exports = {
    // other webpack config settings
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]
};
