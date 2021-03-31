import React from "react";

interface State {}

interface Props {}

export default class RemoteComponent extends React.PureComponent<Props, State> {
  render() {
    return <>extra remote component</>;
  }
}
