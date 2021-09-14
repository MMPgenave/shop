import React, { useState, useContext } from "react";
import { myContext } from "../../components/ProductsProvider";
import styles from './style.css';

const Search = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(myContext);

  const changeHandler = (e) => {
    console.log("searching initialized")
    dispatch({ type: "search", payload: e.target.value });
        setValue(e.target.value);

  };

  return (
    <div className="container">
      
      <input
        type="text"
        placeholder="search for size ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};
export default Search;
