import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../theme/themContext";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeContextProvider>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeContextProvider>
  );
}

export default appWithTranslation(App);
