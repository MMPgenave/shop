import { Component } from "react";
import data from "./data";
import { Product } from "./Product";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "mohammad",
      info: data,
      removeItem: (I) => {
        console.log("remove function initialized!");
        const newdata = this.state.info.filter((Index) => {
          return Index.id !== I;
        });
        this.setState({ ...this.state, info: newdata });
      },
      reloader:1
    };
  }

  render() {
    return (
      <>
        
        {<Product info={this.state.info} removefcn={this.state.removeItem}/>}
        
      </>
    );
  }
}

export default App;
