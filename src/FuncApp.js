import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";

const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <h1>Hi</h1>

        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
