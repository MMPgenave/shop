import React, { useState } from "react";
import { useRef } from "react";
import ShowLorem from "./ShowLorem";
const Lorem = () => {
  const [inputValue, setInputValue] = useState(0);
  const refInput = useRef(null);

  const submitHandler = (e) => {
    window.alert("form submitted");
    e.preventDefault();
    const numberOfItems = refInput.current.value;
    setInputValue((prev) => numberOfItems);
  };

  return (
    <div>
      <h1>Lorem Ipsum</h1>
      <form onSubmit={submitHandler}>
        <label>
          <h3>how much : </h3>
        </label>
        <input type="text" autoFocus ref={refInput} />
        <button type="submit">Submit</button>
      </form>
      {inputValue ? <ShowLorem value={inputValue} /> : <h1>nothing yet </h1>}
    </div>
  );
};

export default Lorem;
