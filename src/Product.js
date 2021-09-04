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
            <h4 className="numberOfProduct">{0}</h4>
            <h4>{I.name}</h4>
            <button type="button" className="increase">
              +
            </button>

            <button type="button" className="decrease">
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
