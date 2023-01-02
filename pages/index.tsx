import Head from "next/head";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CopyRight, IngredientLink, Nav, ProductNav } from "../components";
import ThemeContext from "../theme/themContext";
import { useContext, useEffect, useState } from "react";
import { themeData } from "../theme/themeData";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation(["common", "intro"]);
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  const [angle, setAngle] = useState(20);

  const y = useMotionValue(0.5);
  const x = useMotionValue(0.5);

  const translateX = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true,
  });

  const translateY = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true,
  });

  const onMove = (e: any) => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect();

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

    // update MotionValues
    x.set(xValue, true);
    y.set(yValue, true);
  };

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
            onPointerMove={onMove}
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  className="section__body__bg"
                  style={{
                    translateY,
                    translateX,
                  }}
                >
                  <Image
                    src={themeData[`${themeCtx.theme}`].introBg}
                    alt="Intro Background"
                  />
                </motion.div>
              </div>
              <div
                className="section__image section__image--intro"
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
