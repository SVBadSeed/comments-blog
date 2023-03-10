const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    devtool: "source-map",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'comments.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "scss-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "bundle.css",
                },
                use: ["sass-loader"],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        port: 3100,
        open: true,
    }
}