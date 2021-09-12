import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";
import Navbar from "./Navbar";

const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <h1>Hi</h1>
        <Navbar />
        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
