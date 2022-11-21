import { createContext, useEffect, useState } from "react";
export const JsonContext = createContext();

export const JsonProvider = ({ children }) => {
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
    <JsonContext.Provider value={{ data }}>{children}</JsonContext.Provider>
  );
};
