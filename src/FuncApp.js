import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";
import Navbar from "./Navbar";
import Filter from "./Filter";
import PriceSort from "./PriceSort";

const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <div className="sortFilter_container">
          <PriceSort />
          <Filter />
        </div>
        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
