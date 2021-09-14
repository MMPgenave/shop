import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "./ProductsProvider";
import SelectComp from '../common/SelectComp/Select'

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
      <SelectComp
        value={value}
        Handler={onChangeHandler}
        options={options}
        title="filter based on size"
      />
      <SelectComp
        value={sortvalue}
        Handler={sortHandler}
        options={sortOptions}
        title="filter based on Price"
      />
    </div>
  );
}
