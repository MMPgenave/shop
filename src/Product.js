import React from "react";
import "./style.css"
export const Product = (props) => {

  return (
    <>
          
          {props.info.map(I => {
              return (
                <div key={I.id} className="item_container">
                  <h1>{I.name}</h1>
                      <h1>{I.price}</h1>
                      <button type="button" className="btn" onClick={()=>{props.removefcn(I.id)}}>delete</button>
                </div>
              );
          })}
    </>
  );
};
