const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 시작하는 js파일
  entry: "./index.js",

  // 번들한 파일에 대한 설정
  output: {
    // 번들한 파일 이름
    filename: "main.js",
    // 번들할 파일 경로
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // 적용할 파일명 설정
        test: /\.s[ac]ss$/i,

        // 뒤에서 부터 적용
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    // html 설정
    // html-webpack-plugin
    new HtmlWebpackPlugin({
      // 기존의 html파일을 사용
      template: "./index.html",
    }),

    // css 설정
    // mini-css-extract-plugin
    // head안에 css를 설정하는 것이 아니라 css파일을 새로 만들어서 그 파일을 loader하게 설정
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    // 기존 번들된 파일을 지우고 새로운 파일로 덮는다.
    // clean-wepback-plugin
    new CleanWebpackPlugin(),

    // static폴더 설정
    // copy-webpack-plugin
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // 개발 서버 설정
  // wepback-dev-server -D
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
  },
};
