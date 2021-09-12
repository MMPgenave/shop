import React, { useState } from 'react'
import { useContext } from 'react';
import Select from 'react-select';
import { myContext } from './ProductsProvider';


export default function Filter() {

  const {dispatch}=useContext(myContext)
  const [value, setValue] = useState("");

  const options = [
    { value: "", label: "ALL" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const onChangeHandler = (selectedOption) => {
    dispatch({ type: "filter", payload: selectedOption.value });
    setValue(selectedOption);
  }
    return (
      <div className="filter">
        <Select value={value} onChange={onChangeHandler} options={options} />
      </div>
    );
}
