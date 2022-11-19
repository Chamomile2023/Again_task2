import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicPage from "../BasicPage/BasicPage";

const RouteAll = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<BasicPage />} />
      </Routes>
    </>
  );
};

export default RouteAll;
