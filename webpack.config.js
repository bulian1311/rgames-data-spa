const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },

  target: 'web',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  output: {
    filename: 'bundle.min.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',
};
