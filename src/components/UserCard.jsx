import React from "react";
import "./UserCard.css";
import img from "../assets/react.svg";
const UserCard = (props) => {
  return (
    <div className="User-container" style={props.style}>
      <p id="language">{props.name}</p>
      <img className="images" src={props.image} alt="React" />
      <p id="Description">{props.decription}</p>
    </div>
  );
};

export default UserCard;
//props ka matlab hai data send krna ya image ya name ya picture kuch bahi khin sy bhi  ab hum ny wo user card mai use krny hai to ehan hi data send ho ga
