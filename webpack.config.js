const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/public/js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    static: "./public",
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [new CleanWebpackPlugin()],
};
