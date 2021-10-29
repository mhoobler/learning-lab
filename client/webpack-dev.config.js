const path = require("path");
const wp = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 3000,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jped|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new wp({
      template: "./public/index.html",
    }),
  ],
};
