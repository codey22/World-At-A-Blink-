// src/theme.js
import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }), []);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              background: {
                default: "#f5f5f5",
                paper: "#ffffff",
              },
              text: {
                primary: "#000000",
              },
            }
          : {
              background: {
                default: "#121212",
                paper: "#1a1a1a",
              },
              text: {
                primary: "#ffffff",
              },
            }),
      },
    }), [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
