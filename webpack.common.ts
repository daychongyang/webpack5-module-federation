import fs from "fs";
import path from "path";

import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const isFile = (p: string) => fs.existsSync(p) && fs.statSync(p).isFile();
const resolveApp = (p: string) => path.resolve(process.cwd(), p);

let template = resolveApp("public/index.html");

if (!isFile(template)) template = path.resolve(__dirname, "public/index.html");

export default <Configuration>{
  entry: resolveApp("src/index.tsx"),
  output: {
    filename: "main.js",
    path: resolveApp("dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.((ts|js)(x?))$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                require.resolve("@babel/preset-env"),
                {
                  useBuiltIns: "usage",
                  corejs: { version: 3 },
                },
              ],
              require.resolve("@babel/preset-react"),
              require.resolve("@babel/preset-typescript"),
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
  ],
};
