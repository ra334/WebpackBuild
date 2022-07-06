const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: '/js/main.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },

    devServer: {
        port: 4200,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Title',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: '',
            to: ''
        }, ]),
    ],

    module: {
        rules: [{
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }

}