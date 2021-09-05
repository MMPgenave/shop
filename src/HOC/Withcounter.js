import React from "react";

const Withcounter = (WrappedComponent, parameter) => {
  class WithCounter extends React.Component {
    state = { count: 0 };

    counterHandler = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <>
          <h1>{parameter} times dar va Kared</h1>
          <WrappedComponent
            fcn={this.counterHandler}
            State={this.state}
            {...this.props}
          />
        </>
      );
    }
  }

  return WithCounter;
};

export default Withcounter;
