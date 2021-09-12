import React, { useContext } from "react";
import "./style.css";
import { myContext } from "./ProductsProvider";

const Product = () => {
  const { info, NORI, dispatch } = useContext(myContext);

  return (
    <>
      {info.map((Item) => {
        return (
          <div key={Item.id} className="item_container">
            <h3>Product name : {Item.title} course</h3>
            <h3>Product price : {Item.price} $</h3>
            <div className="numberOfProduct">{NORI[Item.id - 1]}</div>
            <div className="temp">
              size:
              {Item.availableSizes.map((item, index) => {
                return (
                  <div key={index} className="sizes">
                    <span>{item} ,   </span>
                  </div>
                );
              })}
            </div>
            <button
              className="decrease_btn"
              onClick={() => dispatch({ type: "removeFromCart", id: Item.id })}
            >
              -
            </button>
            <button
              className="increase_btn"
              onClick={() => dispatch({ type: "addToCart", id: Item.id })}
            >
              +
            </button>

            <button
              className="delete_btn"
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
