import React, { useContext } from "react";
import "./style.css";
import { myContext } from "./ProductsProvider";

const Product = () => {
  const { info, dispatch } = useContext(myContext);

  return (
    <>
      {info.map((Item) => {
        return (
          <div key={Item.id} className="item_container">
            <h3>Product name : {Item.name} course</h3>
            <h3>Product price : {Item.price}</h3>
            <button
              onClick={() => dispatch({ type: "deleteItem", id: Item.id })}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Product;
