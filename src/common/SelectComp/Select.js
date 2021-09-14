import React from "react";
import Select from "react-select";
import styles  from "./select.css";
export default function SelectCopmp({value,Handler,options,title}) {
  return (
    <div className="filter">
      <h4>{title}</h4>
      <Select 
        value={value}
        onChange={Handler}
        options={options}
        className="select"
      />
    </div>
  );
}
