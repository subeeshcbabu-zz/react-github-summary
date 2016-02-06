module.exports = {
    entry: './devserver/main.js',
    output: {
        path: './devserver/',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 9000
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loaders: ['style', 'css'],
                test: /\.css$/,
                exclude: /\.useable\.css$/
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                loader: 'url?limit=8192'
            }
        ]
    }
};
