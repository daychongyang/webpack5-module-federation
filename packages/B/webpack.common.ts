import { container } from "webpack";
import type { Configuration } from "webpack";

const { ModuleFederationPlugin } = container;

const deps = require("./package.json").dependencies;

export default <Configuration>{
  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remote-components-entry.js",
      exposes: {
        "./remote-component": "./src/RemoteComponent",
      },
    }),
  ],
};
