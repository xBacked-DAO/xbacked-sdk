// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  entry: {
    'xbacked-sdk': './src/index.ts',
    'xbacked-sdk.min': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/browser'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'xbacked-sdk',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
