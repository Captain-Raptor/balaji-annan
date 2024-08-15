import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/themeActions"; // Import toggleTheme action

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const theme = useSelector(state => state.theme); 
  const dispatch = useDispatch();

  const ToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        ToggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider};
