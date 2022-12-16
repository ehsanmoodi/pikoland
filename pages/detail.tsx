import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { CopyRight, Ingredient, Nav } from "../components";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import ThemeContext from "../theme/themContext";
import { themeData } from "../theme/themeData";
import { useRouter } from "next/router";

// Images
import cakeSm from "../public/images/cake-sm.png";
import cakeMd from "../public/images/cake-md.png";
import cakeLg from "../public/images/cake-lg.png";

export default function Detail() {
  const { locale } = useRouter();
  const { t } = useTranslation(["common", "ingredients"]);

  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Detail | Pikoland</title>
        <meta name="description" content="Ingredients" />
      </Head>

      <main>
        <section className="section">
          <CopyRight />
          <div className="section__container">
            <Nav classes="mobile" />
            <div className="section__body">
              <Nav classes="desktop" />
              <div className="ingredients">
                <h1 className="ingredients__title">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    exit={{ width: "100%" }}
                    transition={{ duration: 1, ease: "circIn" }}
                    className="ingredients__title__layer"
                  ></motion.div>
                  {t("ingredients", { ns: "common" })}
                </h1>
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  transition={{
                    duration: 1,
                  }}
                  className="ingredients__body"
                >
                  {themeData[`${themeCtx.theme}`].ingredients.map((item) => (
                    <Ingredient
                      key={item.id}
                      image={item.image}
                      title={t(item.id, { ns: "ingredients" })}
                    />
                  ))}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="section__body__bg"
              >
                <Image
                  src={themeData[`${themeCtx.theme}`].detailBg}
                  alt="Intro Background"
                />
              </motion.div>
            </div>
            <div
              className="section__image section__image--ingredients"
              style={{
                background: `${themeData[`${themeCtx.theme}`].bg}`,
              }}
            >
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                exit={{ width: "100%" }}
                transition={{ duration: 1, ease: "circIn" }}
                className="section__image__layer"
              ></motion.div>
              <motion.div
                initial={locale === "en" ? { x: "100vw" } : { x: "-100vw" }}
                animate={{ x: 0 }}
                exit={locale === "en" ? { x: "100vw" } : { x: "-100vw" }}
                transition={{ duration: 1, ease: "backOut" }}
                className="lg:self-start -ml-20 lg:ml-0 lg:-mb-14"
              >
                <Image src={cakeMd} alt="Cake Medium" quality={100} />
              </motion.div>
              <motion.div
                initial={locale === "en" ? { x: "-100vw" } : { x: "100vw" }}
                animate={{ x: 0 }}
                exit={locale === "en" ? { x: "-100vw" } : { x: "100vw" }}
                transition={{ duration: 1, ease: "backOut", delay: 0.25 }}
                className="lg:self-end -mr-40 lg:mr-0 -my-8 lg:-my-10"
              >
                <Image src={cakeSm} alt="Cake Small" quality={100} />
              </motion.div>
              <motion.div
                initial={locale === "en" ? { x: "100vw" } : { x: "-100vw" }}
                animate={{ x: 0 }}
                exit={locale === "en" ? { x: "100vw" } : { x: "-100vw" }}
                transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
                className="lg:-ml-0"
              >
                <Image src={cakeLg} alt="Cake Large" quality={100} />
              </motion.div>
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
        "ingredients",
      ])),
    },
  };
};
