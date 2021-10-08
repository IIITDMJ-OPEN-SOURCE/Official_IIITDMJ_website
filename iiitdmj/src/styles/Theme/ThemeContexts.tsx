import React from "react";

export const initialThemeState = {
  theme: "light",
  setTheme: (Theme: any) => {}
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
