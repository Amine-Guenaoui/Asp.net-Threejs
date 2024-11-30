const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main JS file
    output: {
        filename: 'bundle.js', // Output bundle
        path: path.resolve(__dirname, 'wwwroot/js'), // Output path
    },
    mode: 'development', // Or 'production'
};
