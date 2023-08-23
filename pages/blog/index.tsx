import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { BlogItem, CopyRight, Nav } from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { themeData } from "../../theme/themeData";
import { useContext, useState } from "react";
import ThemeContext from "../../theme/themContext";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { blogs } from "../../content/blog";

export default function Blog() {
  const { locale } = useRouter();
  const { t } = useTranslation(["common"]);
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
        <title>Blog | Pikoland</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section" onPointerMove={onMove}>
          <CopyRight />
          <div className="section__container">
            <Nav classes="mobile" />
            <div className="section__body">
              <Nav classes="desktop" />
              <div className="blog">
                <h1 className="blog__title">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    exit={{ width: "100%" }}
                    transition={{ duration: 1, ease: "circIn" }}
                    className="blog__title__layer"
                  ></motion.div>
                  {t("blog", { ns: "common" })}
                </h1>
                <div className="blog__body">
                  {blogs.map((item) => (
                    <BlogItem
                      key={item.slug}
                      image={item.thumbnail}
                      title={locale === "en" ? item.title.en : item.title.fa}
                      date={locale === "en" ? item.date.en : item.date.fa}
                      link={`/blog/${item.slug}`}
                    />
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="section__body__bg"
                style={{
                  translateY,
                  translateX,
                }}
              >
                <Image
                  src={themeData[`${themeCtx.theme}`].blogBg}
                  alt="Blog Background"
                />
              </motion.div>
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
                exit={{ width: "100%" }}
                transition={{ duration: 1, ease: "circIn" }}
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
      ...(await serverSideTranslations(locale ?? "en", ["common", "nav"])),
    },
  };
};
