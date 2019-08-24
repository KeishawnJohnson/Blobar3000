import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Power:</strong> {props.power}
          </li>
          <li>
            <strong>Alive?:</strong> {props.alive}
          </li>
        </ul>
      </div>
      {/* change to click function and alert that theyve been clicked, and pass name */}
      <span onClick={() => props.clicked(props.name)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
