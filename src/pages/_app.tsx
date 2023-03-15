import type { AppProps } from "next/app";
import { ColorModeContext, useMode } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    //@ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps}>
          <main className="content"></main>
        </Component>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
