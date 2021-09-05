import React from "react";
import ClickCounter from "./ClickCounter.js";
import HoverCounter from "./HoverCounter";
class Appfortest extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter name="mohammad" />
      </div>
    );
  }
}

export default Appfortest;
