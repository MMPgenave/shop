import React from "react";
import data from "./data";

const ShowLorem = (props) => {
  const Data = data.filter((Item) => {
    return Item.id <= props.value;
  });

  return Data.map((element) => {
    return (
      <div key={element.id}>
        <h1>{element.text}</h1>
      </div>
    );
  });
};

export default ShowLorem;
