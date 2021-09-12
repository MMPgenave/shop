import React, { useReducer, useState } from "react";
import data from "./data";

const initialState = {
  data
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

    default:
  }
}; //end reducer function

export const myContext = React.createContext();

//Provider component
const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{ info: state.data, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

export default ProductsProvider;
