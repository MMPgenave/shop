import React from "react";
import withdartar from "./Withcounter";
class ClickCounter extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.fcn}>
        clicked {this.props.State.count} times
      </button>
    );
  }
}

export default withdartar(ClickCounter, 5);
