import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicPage from "../BasicPage/BasicPage";
import { JsonContext } from "../Context/JsonData/JsonData";

const RouteAll = () => {
  return (
    <>
      <JsonContext.Provider>
        <Routes>
          <Route path="/" exact element={<BasicPage />} />
        </Routes>
      </JsonContext.Provider>
    </>
  );
};

export default RouteAll;
