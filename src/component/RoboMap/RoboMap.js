import React from "react";
import "./Style.css";
const RoboMap = ({ users, enterValue }) => {
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
  return <div className="container">{mapFilterRobo}</div>;
};

export default RoboMap;
