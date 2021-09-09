import { Component } from "react";
import data from "./data";
import { Product } from "./Product";

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
   
      info: data,
      numberOfItem: new Array(data.length).fill(0),
      removeItem: (I) => {
        console.log("removeItem function initialized!");
        const newdata = this.state.info.filter((Index) => {
          return Index.id !== I;
        });
        this.setState({ ...this.state, info: newdata });
      },
      increaseItem: (index) => {
        console.log("increaseItem function initialized ");

        //making a copy from numberOfItem property
        const auxalliry = { ...this.state.numberOfItem };
        auxalliry[index - 1] = this.state.numberOfItem[index - 1] + 1;
        this.setState({
          ...this.state,
          numberOfItem: auxalliry,
        });
      },
      decreaseItem: (index) => {
        console.log("decreaseItem function initialized ");

        //making a copy from numberOfItem property
        const auxalliry = { ...this.state.numberOfItem };
        if (this.state.numberOfItem[index - 1] === 0) {
          auxalliry[index - 1] = 0;
        } else {
          auxalliry[index - 1] = this.state.numberOfItem[index - 1] - 1;
        }

        this.setState({
          ...this.state,
          numberOfItem: auxalliry,
        });
      },
    };
  }

  render() {
    return (
      <>
        
     
       
          <Product
            info={this.state.info}
            removefcn={this.state.removeItem}
            numberOfBookedItem={this.state.numberOfItem}
            IncreaseItem={this.state.increaseItem}
            DecreaseItem={this.state.decreaseItem}
          />
       
        
      </>
    );
  }
}

export default App;
