var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/soundclone.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(jpg|jpeg|png)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name][md5:hash].[ext]",
            outputPath: "webpack-assets/",
            publicPath: "/assets/webpack-assets/"
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"],
    alias: {
      assets: path.resolve('./app/assets')
    }
  }
};
