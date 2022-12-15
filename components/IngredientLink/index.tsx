import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import ThemeContext from "../../theme/themContext";
import { themeData } from "../../theme/themeData";

const IngredientLink: React.FC = () => {
  const { t } = useTranslation(["common", "intro"]);

  const { locale } = useRouter();

  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  return (
    <div className="ingredient-link">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        transition={{ duration: 2, ease: "circIn" }}
        className="ingredient-link__layer"
      ></motion.div>
      <Image
        src={themeData[`${themeCtx.theme}`].bgIngredient}
        alt="Ingredient Link"
      />
      <motion.div
        initial={locale === "en" ? { x: "100%" } : { x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75, delay: 2, ease: "backOut" }}
        className="ingredient-link__body"
      >
        <p className="ingredient-link__body__title">
          {t(`${themeCtx.theme}.ingredientDescription`, { ns: "intro" })}
        </p>
        <Link
          href="/detail"
          className="ingredient-link__body__href"
          style={{ color: `${themeData[`${themeCtx.theme}`].color}` }}
        >
          {t("ingredients", { ns: "common" })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
              d="M14.43 5.93 20.5 12l-6.07 6.07"
            />
            <path
              style={{
                stroke: `${themeData[`${themeCtx.theme}`].color}`,
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M3.5 12h16.83"
              opacity=".4"
            />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default IngredientLink;
