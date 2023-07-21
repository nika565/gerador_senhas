const path = require('path'); //CommonJS

// Exportando o objeto para fora do arquivo webpack
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),

        filename: 'bundle.js', // Contém todos os arquivos da aplicação
    },
    module: {
        rules: [{
            exclude: /node_modules/,

            test: /\.js$/,

            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },

        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    devtool: 'source-map' // Quando acontecer um erro ou algum log ele vai mapear em qual arquivo aconteceu
};