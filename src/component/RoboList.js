import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import RoboMap from "./RoboMap/RoboMap";

const RoboList = ({ enterValue }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  }, []);

  return <RoboMap enterValue={enterValue} users={users}></RoboMap>;
};

export default RoboList;
