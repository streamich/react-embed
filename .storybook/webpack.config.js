const path = require('path');
const {compilerOptions} = require('../tsconfig.json');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [SRC_PATH],
        options: {
          transpileOnly: true, // use transpileOnly mode to speed-up compilation
          compilerOptions: {
            ...compilerOptions,
            declaration: false,
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.gif', '.jpg', '.png'],
    enforceExtension: false,
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
