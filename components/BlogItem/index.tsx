import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogItemProps } from "./types.d";
import ThemeContext from "../../theme/themContext";
import { useContext } from "react";
import { themeData } from "../../theme/themeData";
import { useTranslation } from "next-i18next";

const BlogItem: React.FC<BlogItemProps> = ({ image, title, date, link }) => {
  const { t } = useTranslation("common");
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <article className="blog-item">
      <div className="blog-item__image">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ duration: 2, ease: "circIn" }}
          className="blog-item__image__layer"
        ></motion.div>
        <Image src={image} alt={title} />
      </div>
      <div className="blog-item__body">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ duration: 2, ease: "circIn" }}
          className="blog-item__body__layer"
        ></motion.div>
        <p className="blog-item__body__excerpt">{title}</p>
        <div className="blog-item__body__meta">
          <Link
            href={link}
            className="blog-item__body__meta__link"
            style={{ color: `${themeData[`${themeCtx.theme}`].color}` }}
          >
            {t("read-more")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                style={{
                  stroke: `${themeData[`${themeCtx.theme}`].color}`,
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M12.025 4.942 17.083 10l-5.058 5.059"
              />
              <path
                style={{
                  stroke: `${themeData[`${themeCtx.theme}`].color}`,
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M2.916 10h14.025"
                opacity=".4"
              />
            </svg>
          </Link>
          <span
            className="blog-item__body__meta__date"
            dangerouslySetInnerHTML={{ __html: date }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
