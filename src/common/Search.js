import React, { useState, useContext } from "react";
import { myContext } from "../components/ProductsProvider";

const Search = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(myContext);

  const changeHandler = (e) => {
    console.log("Search box initialized");
    setValue(e.target.value);
    dispatch({ type: "search", payload: value });
  };

  return (
    <>
      <h1>search box</h1>
      <input type="text" onChange={changeHandler} value={value} />
    </>
  );
};
export default Search;
