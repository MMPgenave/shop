import React, { useReducer, useState } from "react";
import data from "./productsdata";

const initialState = {
  data,
  numberOfReservedItem: new Array(data.length).fill(2),
};

//reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "deleteItem":
      const newProducts = state.data.filter((product) => {
        return product.id !== action.id;
      });
      return { ...state, data: newProducts };
      break;

    case "addToCart":
      {
        const temp = { ...state };
        temp.numberOfReservedItem[action.id - 1]++;
        return temp;
      }
      break;

    case "removeFromCart":
      {
        const temp = { ...state };
        if (state.numberOfReservedItem[action.id - 1] === 0) {
          temp.numberOfReservedItem[action.id - 1] = 0;
        } else {
          temp.numberOfReservedItem[action.id - 1]--;
        }

        return temp;
      }
      break;
    default:
  }
}; //end reducer function

export const myContext = React.createContext();

//Provider component
const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider
      value={{ info: state.data, NORI: state.numberOfReservedItem, dispatch }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ProductsProvider;
