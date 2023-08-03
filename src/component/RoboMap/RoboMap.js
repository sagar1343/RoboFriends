import React from "react";
import "./Style.css";
const RoboMap = ({ users, enterValue }) => {
  const allRobo = users.map((user) => (
    <div key={user.id} className="robot" id={"robot" + user.id}>
      <img
        src={"https://robohash.org/" + user.id}
        alt={"Robo_img_" + user.id}
      ></img>
      <p className="userName">{user.name}</p>
    </div>
  ));
  const filteredRobo = users.filter((user) => {
    return user.name.toLowerCase().includes(enterValue.toLowerCase());
  });
  const mapFilterRobo = filteredRobo.map((filteredRobo) => (
    <div key={filteredRobo.id} className="robot" id={"robot" + filteredRobo.id}>
      <img
        src={"https://robohash.org/" + filteredRobo.id}
        alt={"Robo_img_" + filteredRobo.id}
      ></img>
      <p className="userName">{filteredRobo.name}</p>
    </div>
  ));
  return (
    <div className="container">
      {enterValue === "" ? allRobo : mapFilterRobo}
    </div>
  );
};

export default RoboMap;
