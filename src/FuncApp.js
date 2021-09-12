import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";
import Navbar from "./Navbar";
import Filter from './Filter'
const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Filter />
        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
