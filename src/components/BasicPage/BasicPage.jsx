import React from "react";
import "./BasicPage.scss";
import BasicPageMiddle from "./BasicPageMiddle";
import BasicPageTop from "./BasicPageTop";
import BasicPageMen from "./BasicPageMen";

const BasicPage = () => {
  return (
    <>
      <BasicPageTop />
      <BasicPageMiddle />
      <BasicPageMen />
    </>
  );
};

export default BasicPage;
