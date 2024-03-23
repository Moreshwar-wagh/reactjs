import React, { createContext, useState } from "react";
import Data from "../Data/celebrities.json";

export const CelebritiesContext = createContext();

export const CelebritiesProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(Data);

  const updateJSONData = (updatedData) => {
    setJsonData(updatedData);
  };
  return (
    <CelebritiesContext.Provider value={{ jsonData, updateJSONData }}>
      {children}
    </CelebritiesContext.Provider>
  );
};
