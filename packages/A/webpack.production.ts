import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import webpackCommonConfig from "../../webpack.common";

export default <Configuration>merge(webpackCommonConfig, {
  mode: "production",
  devtool: false,
});
