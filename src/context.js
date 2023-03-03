import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("felix");
  const { isLoading, error, data: movie } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ isLoading, query, movie, error, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
