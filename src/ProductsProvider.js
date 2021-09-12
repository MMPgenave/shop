import React, { useContext, useState } from "react";
import data from "./data";

export const myContext = React.createContext();

//Proider component
const ProductsProvider = (props) => {
  const [products, setProducts] = useState(data);

  //deleteItem Function handler
  const deleteItem = (id) => {
    const newProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts((prevState) => newProducts);
  };
  return (
    <myContext.Provider
      value={{ info: products, action: { delete: deleteItem } }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ProductsProvider;
