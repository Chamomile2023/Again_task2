import React from "react";
import "./Card.scss";
import stars from "../assets/stars.svg";

const Card = ({ card }) => {
  return (
    <>
      <div className="card">
        <img src={card.img} alt="" className="card--img" />
        <p className="card__title">{card?.content}</p>
        <div className="card__rating">
          <h6 className="card__rating--cost">{card?.cost}</h6>
          <img src={stars} alt="" className="card__rating--stars" />
        </div>
      </div>
    </>
  );
};

export default Card;
