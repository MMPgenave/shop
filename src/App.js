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
        
          console.log("remove function initialized!")
       const newdata = data.filter(Index => {
          return Index.id !== I
        });
        this.setState({...this.state, info: newdata });

        }
    };
  }

  render() {
    return (
      <>
        <h1>Hi my name is {this.state.name}</h1>
        <h2>these are my favorites</h2>
        {<Product info={this.state.info} removefcn={this.state.removeItem}/>}
        
      </>
    );
  }
}

export default App;
