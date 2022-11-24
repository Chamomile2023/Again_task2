import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicPage from "../BasicPage/BasicPage";
import { JsonContext } from "../Context/JsonData/JsonData";
import MenHeaderPage from "../MenHeaderPage/MenHeaderPage";
import WomenHeaderPage from "../WomenHeaderPage/WomenHeaderPage";
import Features from "../Features/Features";

const RouteAll = () => {
  return (
    <>
      <JsonContext.Provider value={{}}>
        <Routes>
          <Route path="/" exact element={<BasicPage />} />
          <Route path="/women" element={<WomenHeaderPage />} />
          <Route path="/men" element={<MenHeaderPage />} />
          <Route path="/clothes" element={<Features />} />
        </Routes>
      </JsonContext.Provider>
    </>
  );
};

export default RouteAll;
