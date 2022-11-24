import React, { useEffect, useState } from "react";
import "./BasicPage.scss";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const BasicPageMiddle = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const request = await fetch("http://localhost:3005/data");
    const response = await request.json();
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="basic_middle">
        <div className="container">
          <h2 className="basic_middle__title">WOMEN'S</h2>
          <div className="basic_middle__hero">
            {data.slice(0, 8).map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </div>
          <NavLink to="/all">
            <button className="basic_middle__btn">See all</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BasicPageMiddle;
