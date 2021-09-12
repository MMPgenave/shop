import React, { useReducer } from "react";
import data from "./data";

//Initial State
const initialState = {
  data
};


//reducer Funcion
const reducer = (state, action) => {
  switch (action.type)
  case "addItem": {}


  default 
  console.log('dartar')
};



export const myContext = React.createContext();


//ProideR component
const ProvideR = (props) => {


  const [state, dispatch] = useReducer(reducer, initialState);

  return <myContext.Provider value={{info:data}}>{props.children}</myContext.Provider>;
};

export default ProvideR;
