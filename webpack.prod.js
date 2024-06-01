const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/DateTimePicker/DateTimePicker.jsx', // Point d'entrée pour la production
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'DateTimePicker',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ajoute les extensions .js et .jsx
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom', // Exclut React et ReactDOM du bundle
  },
};
