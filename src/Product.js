import React from "react";
import "./style.css";
export const Product = (props) => {
  return (
    <>
      {props.info.map((I) => {
        return (
          <div key={I.id} className="item_container">
            <h3>Product name : {I.name} course</h3>
            <h3>Product price : {I.price}</h3>
            <h4 className="numberOfProduct">
              {props.numberOfBookedItem[I.id - 1]}
            </h4>
            <h4>{I.name}</h4>
            <button
              type="button"
              className="increase"
              onClick={() => {
                props.IncreaseItem(I.id);
              }}
            >
              +
            </button>

            <button
              type="button"
              className="decrease"
              onClick={() => props.DecreaseItem(I.id)}
            >
              -
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => {
                props.removefcn(I.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
