import { ThemeProvider } from "@emotion/react";
import { type AppType } from "next/app";

import "~/styles/globals.css";
import theme from "~/theme/default";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
