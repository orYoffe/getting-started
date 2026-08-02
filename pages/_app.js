import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ColorModeContext } from "../util/theme";

const storageKey = "getting-started-color-mode";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState("light");

  React.useEffect(() => {
    const savedMode = window.localStorage.getItem(storageKey);
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setMode(savedMode || systemMode);
  }, []);

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((currentMode) => {
          const nextMode = currentMode === "light" ? "dark" : "light";
          window.localStorage.setItem(storageKey, nextMode);
          return nextMode;
        });
      },
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: mode,
          primary: { main: "#4f46e5" },
          secondary: { main: "#0891b2" },
          background:
            mode === "dark"
              ? { default: "#101827", paper: "#182235" }
              : { default: "#f8fafc", paper: "#ffffff" },
        },
        typography: {
          fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          h1: { fontWeight: 800 },
          h2: { fontWeight: 800 },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
