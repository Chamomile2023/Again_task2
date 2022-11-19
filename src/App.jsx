import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Toggle from "./components/Toggle/Toggle";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { ToggleContext } from "./components/Context/Toggle/ToggleContext";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <ToggleContext.Provider value={{ show, setShow }}>
        <Header />
        <Toggle />
      </ToggleContext.Provider>
      <Main />
      <Footer />
    </>
  );
};

export default App;
