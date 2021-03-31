import { container } from "webpack";
import type { Configuration } from "webpack";

const { ModuleFederationPlugin } = container;

export default <Configuration>{
  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-component": "./src/RemoteComponent",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
