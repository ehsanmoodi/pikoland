import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";

import blogFeature1 from "../../public/images/blog/feature1.png";
import Link from "next/link";
import { CopyRight, LanguageSwitcher, Nav } from "../../components";
import { useContext } from "react";
import ThemeContext from "../../theme/themContext";
import { themeData } from "../../theme/themeData";
import { ParsedUrlQuery } from "querystring";
import { blogs } from "../../content/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Single: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featureImage,
  title,
  slug,
  content,
}) => {
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>Blog | Single</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section">
          <CopyRight />
          <div className="section__container">
            <Nav />
            <div className="section__body">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="single"
              >
                <motion.h1
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="single__title"
                >
                  {title}
                </motion.h1>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="single__body"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </motion.div>
            </div>
            <div
              className="section__image section__image--single"
              style={{
                background: `${themeData[`${themeCtx.theme}`].bg}`,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
              >
                <Image src={featureImage} alt="feature image" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Single;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = blogs.map((item) => item.slug);

  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];

  slugs.forEach((slug) => {
    locales?.forEach((locale) => {
      paths.push({
        params: {
          slug,
        },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug ? params.slug.toString() : "";
  const data = blogs.filter((item) => item.slug === slug)[0];

  return {
    props: {
      featureImage: data.featureImage,
      title: locale === "en" ? data.title.en : data.title.fa,
      slug,
      content: locale === "en" ? data.content.en : data.content.fa,
      ...(await serverSideTranslations(locale ?? "en", ["common", "nav"])),
    },
  };
};
