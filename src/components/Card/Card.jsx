import React from "react";
import "./Card.scss";
import stars from "../assets/stars.svg";
import img from "../assets/dress.jpg";
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="" className="card--img" />
        <NavLink to="/clothes" style={{ color: "#000", opacity: 0.8 }}>
          <p className="card__title">{card?.content}</p>
        </NavLink>
        <div className="card__rating">
          <h6 className="card__rating--cost">{card?.cost}</h6>
          <img src={stars} alt="" className="card__rating--stars" />
        </div>
      </div>
    </>
  );
};

export default Card;
