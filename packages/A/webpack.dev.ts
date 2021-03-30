import { Configuration } from "webpack";

export default <Configuration>{
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 9527,
    host: "localhost",
    hot: true,
  },
};
