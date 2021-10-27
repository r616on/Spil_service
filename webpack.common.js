const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

module.exports = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext]",
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/inline",
      },

      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackExternalsPlugin({
      // optional plugin: inject cdn
      externals: [
        {
          module: "jquery",
          entry:
            "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        },
      ],
    }),
  ],
};
