import React, { useState } from "react";
import Select from "react-select";
import { useContext } from "react";
import { myContext } from "./ProductsProvider";

const PriceSort = () => {
  const { dispatch } = useContext(myContext);
  const [value, setValue] = useState("");

  const options = [
    { value: "", label: "All" },
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" }
  ];

  const onChangeHandler = (selectedOption) => {
    dispatch({ type: "sort", payload: selectedOption.value });
    setValue(selectedOption);
  };

  return (
    <div>
      Sort based on Price:
      <Select value={value} onChange={onChangeHandler} options={options} />
    </div>
  );
};
export default PriceSort;
