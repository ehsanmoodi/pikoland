import Head from "next/head";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CopyRight, IngredientLink, Nav, ProductNav } from "../components";
import ThemeContext from "../theme/themContext";
import { useContext, useEffect } from "react";
import { themeData } from "../theme/themeData";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation(["common", "intro"]);
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Pikoland</title>
        <meta
          name="description"
          content="Mini Cakes Whith Carrot & Cinnamon Flavor"
        />
      </Head>

      <main>
        <AnimatePresence mode="wait">
          <motion.section
            key={themeData[themeCtx.theme].id}
            className="section"
          >
            <CopyRight />
            <div className="section__container">
              <Nav classes="mobile" />
              <div className="section__body">
                <Nav classes="desktop" />
                <div className="intro">
                  <div className="intro__info">
                    <motion.div
                      initial={{ width: "100%" }}
                      animate={{ width: 0 }}
                      exit={{ width: "100%" }}
                      transition={{ duration: 1, ease: "circIn" }}
                      className="intro__info__layer"
                    ></motion.div>
                    <Image
                      src={themeData[`${themeCtx.theme}`].curveText}
                      alt="Small Cake, Big Joy"
                    />
                    <h1 className="intro__info__title">
                      {t("bigTitle", { ns: "common" })}
                    </h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t(`${themeCtx.theme}.subtitle`, {
                          ns: "intro",
                        }),
                      }}
                      className="intro__info__subtitle"
                    />
                  </div>
                  <div className="intro__body">
                    <IngredientLink />
                  </div>
                </div>
              </div>
              <div
                className="section__image section__image--intro"
                style={{
                  backgroundColor: `${themeData[`${themeCtx.theme}`].color}`,
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: 0 }}
                  exit={{ width: "100%" }}
                  transition={{ duration: 1, ease: "circIn" }}
                  className="section__image__layer"
                ></motion.div>
                <Image
                  src={themeData[`${themeCtx.theme}`].bgImage}
                  alt="Package Image"
                />
                <ProductNav />
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "nav",
        "intro",
      ])),
    },
  };
};
