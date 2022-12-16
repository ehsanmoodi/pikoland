import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogItem, CopyRight, Nav } from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { themeData } from "../../theme/themeData";
import { useContext } from "react";
import ThemeContext from "../../theme/themContext";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { blogs } from "../../content/blog";

export default function Blog() {
  const { locale } = useRouter();
  const { t } = useTranslation(["common"]);
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Blog | Pikoland</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section">
          <CopyRight />
          <div className="section__container">
            <Nav />
            <div className="section__body">
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
            </div>
            <div
              className="section__image"
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
