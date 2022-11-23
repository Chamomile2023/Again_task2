import React from "react";
import "./BasicPage.scss";
import BasicPageMiddle from "./BasicPageMiddle";
import BasicPageTop from "./BasicPageTop";
import BasicPageMen from "./BasicPageMen";
import SubscribePage from "../SubscribePage/SubscribePage";

const BasicPage = () => {
  return (
    <>
      <BasicPageTop />
      <BasicPageMiddle />
      <BasicPageMen />
      {/* <SubscribePage /> */}
    </>
  );
};

export default BasicPage;
