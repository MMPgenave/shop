import _ from "lodash";
import React, { useReducer, useState } from "react";
import data from "../productsdata";


const initialState = {
  data,
  numberOfReservedItem: new Array(data.length).fill(0)
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
    case "filter": {
      if (action.payload === "") {
        return initialState;
      }
      // here I didn't use the return feature of map method! , amazing
      let newProducts = [];
      initialState.data.map((product) => {
        product.availableSizes.map((size) => {
          if (size === action.payload) {
            newProducts.push(product);
          }
        });
        console.log(`filtered data are ${newProducts}`);
      });
      const newState = { ...initialState };
      newState.data = newProducts;
      return newState;
    }
    //Sort action
    case "sort": {
      if (action.payload === "") {
        return state;
      }
      if (action.payload === "ascending") {
        const Data = [...state.data];
        let temp = {};
        const Length = Data.length;
        for (let i = 0; i < Length; i++) {
          for (let j = i + 1; j < Length; j++) {
            if (Data[i].price > Data[j].price) {
              temp = { ...Data[i] };
              Data[i] = { ...Data[j] };
              Data[j] = { ...temp };
            }
          }
        }
        const newState = { ...state };
        newState.data = Data;
        return newState;
      }
      if (action.payload === "descending") {
        //here I used lodash library
        const descSortedData = _.orderBy(state.data, ["price"], ["desc"]);
        const newState = { ...state }
        newState.data = descSortedData;
        return newState;
      }
    }
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
