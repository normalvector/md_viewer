const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        mode: 'development',
        entry: './src/electron.ts',
        target: 'electron-main',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'electron.js',
        }
    },

    {
        mode: 'development',
        entry: './src/react.tsx',
        target: 'electron-renderer',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.tsx?$/,
                include: /src/,
                use: [{loader: 'ts-loader'}]
            }],
        },
        output: {
            path: __dirname+'/dist',
            filename: 'react.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];