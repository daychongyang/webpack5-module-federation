import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const RemoteComponents = React.lazy(
  () => import("components/remote-component")
);

const ExtraRemoteComponents = React.lazy(
  () => import("extra/remote-component")
);

ReactDOM.render(
  <Suspense fallback="loading">
    <RemoteComponents />
    <hr />
    <ExtraRemoteComponents />
  </Suspense>,
  document.getElementById("root")
);
