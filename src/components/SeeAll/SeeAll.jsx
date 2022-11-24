import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./SeeAll.scss";

const SeeAll = () => {
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
      <div className="see_all">
        <div className="container">
          <div className="see_all__hero">
            {data.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeAll;
