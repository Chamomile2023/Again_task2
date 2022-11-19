import { createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      {children}
    </ToggleContext.Provider>
  );
};
