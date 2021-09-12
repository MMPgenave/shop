import React, { useContext } from "react";
import "./style.css";
import { myContext } from "./Provider";

const Product = () => {
  const data = useContext(myContext);

  return (
    <>
      {data.info.map((I) => {
        return (
          <div key={I.id} className="item_container">
            <h3>Product name : {I.name} course</h3>
            <h3>Product price : {I.price}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Product;
