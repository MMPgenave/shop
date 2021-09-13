import React, { useState } from "react";
import { useContext } from "react";
import Select from "react-select";
import { myContext } from "./ProductsProvider";

export default function Filter() {
  const { dispatch } = useContext(myContext);
  const [value, setValue] = useState("");
  const [sortvalue, setSortValue] = useState("");

  const options = [
    { value: "", label: "ALL" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" }
  ];
  const onChangeHandler = (selectedOption) => {
    dispatch({ type: "filter", payload: selectedOption.value });
    setValue(selectedOption);
  };



 const sortOptions = [
   { value: "", label: "All" },
   { value: "ascending", label: "Ascending" },
   { value: "descending", label: "Descending" },
 ];

 const sortHandler = (selectedOption) => {
   dispatch({ type: "sort", payload: selectedOption.value });
   setSortValue(selectedOption);
 };


  return (
    <div className="filter">
      <h4>Filter based on size:</h4>
      <Select value={value} onChange={onChangeHandler} options={options} />
      <h4>Sort based on Price:</h4>
      <Select value={sortvalue} onChange={sortHandler} options={sortOptions} />
    </div>
  );
}
