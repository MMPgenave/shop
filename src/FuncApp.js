import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";
import Navbar from "./Navbar";

const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
