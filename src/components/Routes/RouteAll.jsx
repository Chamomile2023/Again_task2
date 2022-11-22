import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicPage from "../BasicPage/BasicPage";
import { JsonContext } from "../Context/JsonData/JsonData";
import WomenHeaderPage from "../WomenHeaderPage/WomenHeaderPage";

const RouteAll = () => {
  return (
    <>
      <JsonContext.Provider>
        <Routes>
          <Route path="/" exact element={<BasicPage />} />
          <Route path="/women" element={<WomenHeaderPage />} />
        </Routes>
      </JsonContext.Provider>
    </>
  );
};

export default RouteAll;
