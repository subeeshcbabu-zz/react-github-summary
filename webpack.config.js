module.exports = {
    entry: './Summary.js',
    output: {
        path: './',
        filename: 'index.js'
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
                loader: ['style', 'css'],
                test: /\.css$/,
                exclude: /\.useable\.css$/
            }
        ]
    }
};
