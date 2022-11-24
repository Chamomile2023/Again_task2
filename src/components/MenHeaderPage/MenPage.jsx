import React, { useState, useEffect } from "react";
import "./WomenHeaderPage.scss";
import Card from "../Card/Card";

const MenPage = () => {
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
      <div className="women_card">
        <div className="container">
          <div className="women_card__hero">
            <div className="women_card__cards">
              {data.slice(8, 16).map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenPage;
