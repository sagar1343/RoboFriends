import React from "react";

const SearchBar = ({ enterValue, setEnterValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setEnterValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={enterValue}
        placeholder="Search name here ..."
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;
