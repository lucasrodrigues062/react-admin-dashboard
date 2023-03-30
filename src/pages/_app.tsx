import type { AppProps } from "next/app";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "@/scenes/global/Topbar";
import { EmotionCache } from "@emotion/cache";
import createEmotionCache from "@/styles/cacheConfiguration";
import { CacheProvider } from "@emotion/react";
import { useMode, ColorModeContext } from "@/styles/theme";
import Sidebar from "@/scenes/global/Sidebar";
import { useState } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState(240);

  function handleCollapseSidebar(arg: boolean) {
    setIsCollapsed(arg);
    arg === true ? setSideBarWidth(60) : setSideBarWidth(240);
  }

  return (
    <CacheProvider value={emotionCache}>
      {/* @ts-ignore */}
      <ColorModeContext.Provider value={colorMode}>
        {/* @ts-ignore */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar
              isCollapsed={isCollapsed}
              setIsCollapsed={handleCollapseSidebar}
              sideBarWidth={sideBarWidth}
            />
            <main className="content">
              <Box
                sx={{
                  width: `calc(100% - ${sideBarWidth}px)`,
                  ml: `${sideBarWidth}px`,
                }}
              >
                <Topbar />
                <Component {...pageProps} />
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
