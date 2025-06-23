// src/components/theme.jsx
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
                default: "#fdfdfd",
                paper: "#ffffff",
              },
              text: {
                primary: "#111111",
              },
              divider: "#e0e0e0",
            }
          : {
              background: {
                default: "#121212",
                paper: "#1a1a1a",
              },
              text: {
                primary: "#ffffff",
              },
              divider: "#333",
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
