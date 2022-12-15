import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CopyRight, IngredientLink, Nav } from "../components";
import ThemeContext from "../theme/themContext";

// Images
import { useContext, useEffect } from "react";
import { themeData } from "../theme/themeData";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation(["common", "intro"]);
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  useEffect(() => {
    console.log(themeCtx.theme);
  }, [themeCtx.theme]);

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
        <section className="section">
          <CopyRight />
          <div className="section__container">
            <Nav />
            <div className="section__body">
              <div className="intro">
                <div className="intro__info">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 2, ease: "circIn" }}
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
                      __html: t(`${themeCtx.theme}.subtitle`, { ns: "intro" }),
                    }}
                    className="intro__info__subtitle"
                  />
                </div>
                <IngredientLink />
              </div>
            </div>
            <div
              className="section__image"
              style={{
                background: `${themeData[`${themeCtx.theme}`].bg}`,
              }}
            >
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 2, ease: "circIn" }}
                className="section__image__layer"
              ></motion.div>
              <Image
                src={themeData[`${themeCtx.theme}`].bgImage}
                alt="Package Image"
              />
            </div>
          </div>
        </section>
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
