import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../theme/themContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default appWithTranslation(App);
