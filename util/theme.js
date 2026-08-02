import React from "react";

export const ColorModeContext = React.createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export const useColorMode = () => React.useContext(ColorModeContext);
