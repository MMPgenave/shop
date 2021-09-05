import React from "react";
import withdartar from "./Withcounter";

class HoverCounter extends React.Component {
  render() {
    return (
      <h1 onMouseOver={this.props.fcn}>
        {this.props.name} Hovered me {this.props.State.count} times
      </h1>
    );
  }
}

export default withdartar(HoverCounter);
