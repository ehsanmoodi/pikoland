import Head from "next/head";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import { CopyRight, Nav, PurchaseButton } from "../../components";
import { useContext, useState } from "react";
import ThemeContext from "../../theme/themContext";
import { themeData } from "../../theme/themeData";
import { ParsedUrlQuery } from "querystring";
import { blogs, purchaseLink } from "../../content/blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Single: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featureImage,
  title,
  slug,
  content,
}) => {
  const { t } = useTranslation("common");
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
        <title>Blog | Single</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section" onPointerMove={onMove}>
          <CopyRight />
          <div className="section__container">
            <Nav classes="mobile" />
            <div className="section__body">
              <Nav classes="desktop" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                }}
                className="single"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className="single__back"
                >
                  <Link href="/blog">{t("back")}</Link>
                </motion.span>
                <motion.h1
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  transition={{ duration: 0.75, ease: "backOut" }}
                  className="single__title"
                >
                  {title}
                </motion.h1>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{ duration: 0.75, ease: "backOut" }}
                  className="single__body"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </motion.div>
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
                  src={themeData[`${themeCtx.theme}`].singleBg}
                  alt="Single Background"
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
                exit={{ scale: 0 }}
                transition={{ duration: 0.75, ease: "backOut" }}
              >
                <Image src={featureImage} alt="feature image" />
              </motion.div>
            </div>
          </div>
          <PurchaseButton link={purchaseLink.link} label={purchaseLink.label} />
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
