import React from "react";
import ProductsProvider from "./ProductsProvider";
import Product from "./Product";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "../common/Search";

const FuncApp = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Search />
        <Filter />
        <Product />
      </ProductsProvider>
    </>
  );
};

export default FuncApp;
