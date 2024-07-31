import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log("Clicked");
    setSearchValue(value);
  };
  return (
    <>
      <input
        className="border border-slate-800 border-2"
        type="text"
        onChange={handleChange}
      />
      ;<p>Search value:{searchValue}</p>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Input;
