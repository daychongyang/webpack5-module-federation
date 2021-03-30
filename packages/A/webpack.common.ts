import { container } from "webpack";
import type { Configuration } from "webpack";

const { ModuleFederationPlugin } = container;

export default <Configuration>{
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        components:
          "components@http://localhost:10086/remote-components-entry.js",
      },
    }),
  ],
};
