import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogItem, CopyRight, Nav } from "../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import coconutPackage from "../public/images/coconut-package.png";
import blog1 from "../public/images/blog/1.png";
import blog2 from "../public/images/blog/2.png";
import blog3 from "../public/images/blog/3.png";
import { themeData } from "../theme/themeData";
import { useContext } from "react";
import ThemeContext from "../theme/themContext";

export default function Blog() {
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
                    transition={{ duration: 1, ease: "circIn" }}
                    className="blog__title__layer"
                  ></motion.div>
                  Blog
                </h1>
                <div className="blog__body">
                  <BlogItem image={blog1} />
                  <BlogItem image={blog2} />
                  <BlogItem image={blog3} />
                </div>
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
      ...(await serverSideTranslations(locale ?? "en", ["common", "nav"])),
    },
  };
};
