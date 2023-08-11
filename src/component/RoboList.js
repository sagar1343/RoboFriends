import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import RoboMap from "./RoboMap/RoboMap";
import SearchBar from "./SearchBar";

const RoboList = () => {
  const [users, setUsers] = useState([]);
  const [enterValue, setEnterValue] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <SearchBar enterValue={enterValue} setEnterValue={setEnterValue} />
      <RoboMap enterValue={enterValue} users={users}></RoboMap>
    </>
  );
};

export default RoboList;
