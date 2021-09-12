import React from "react";
import ProvideR from "./Provider";
import Product from "./Product";

const FuncApp = () => {
  return (
    <>
      <ProvideR>
        <h1>Hi</h1>
        <Product />
      </ProvideR>
    </>
  );
};

export default FuncApp;
