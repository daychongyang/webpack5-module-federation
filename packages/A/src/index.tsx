import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const RemoteComponents = React.lazy(
  () => import("components/remote-component")
);

ReactDOM.render(
  <Suspense fallback="loading">
    <RemoteComponents />
  </Suspense>,
  document.getElementById("root")
);

module?.hot?.accept();
