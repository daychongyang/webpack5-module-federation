import { container } from "webpack";
import type { Configuration } from "webpack";

const { ModuleFederationPlugin } = container;

export default <Configuration>{
  plugins: [
    new ModuleFederationPlugin({
      name: "main",
      remotes: {
        components: "components@http://localhost:10086/remoteEntry.js",
        extra: "extra@http://localhost:12138/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};
