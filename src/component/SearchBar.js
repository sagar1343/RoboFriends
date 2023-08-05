import React, { useState } from "react";

const SearchBar = ({ enterValue, setEnterValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setEnterValue(newValue);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={enterValue}
          placeholder="Search name here ..."
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
