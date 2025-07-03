import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const ThemeContext = createContext();

//const ThemeContext = createContext({ theme : 'light' , user : 'punneet'});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isUserLoogedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setUserLoggedIn(true);
    }
  }, [isUserLoogedIn]);

  const toggleTheme = () => {
    console.log("click here");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isUserLoggedinFunc = () => {
    if (localStorage.getItem("accessToken")) {
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    localStorage.clear();
    setUserLoggedIn(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
