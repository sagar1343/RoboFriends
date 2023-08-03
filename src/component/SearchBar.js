import React, { useState } from "react";
import RoboList from "./RoboList";

const SearchBar = () => {
  const [enterValue, setEnterValue] = useState("");

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
      <RoboList enterValue={enterValue}></RoboList>
    </div>
  );
};

export default SearchBar;
