import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useContext, useEffect, useState } from "react";
import ThemeContext from "../../theme/themContext";
import { themeData } from "../../theme/themeData";

import type { NavProps } from "./types.d";

const Nav: React.FC<NavProps> = ({ classes }) => {
  const { t } = useTranslation("nav");
  const router = useRouter();

  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  const items: {
    id: string;
    label: string;
  }[] = [
    {
      id: "carrot",
      label: t("carrot"),
    },
    {
      id: "hazelnut",
      label: t("hazelnut"),
    },
    {
      id: "raisin",
      label: t("raisin"),
    },
    {
      id: "coconut",
      label: t("coconut"),
    },
  ];

  const handleClick = (event: MouseEvent, theme: string) => {
    event.preventDefault();
    themeCtx.toggleTheme(theme);
    router.push("/");
  };

  useEffect(() => {}, [themeCtx.theme]);

  return (
    <ul className={`section__nav ${classes}`}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            onClick={(e: MouseEvent) => handleClick(e, item.id)}
            style={{
              color: `${
                themeCtx.theme === item.id &&
                (router.asPath === "/" || router.asPath === "/detail")
                  ? `${themeData[themeCtx.theme].color}`
                  : ""
              }`,
            }}
            href=""
          >
            {item.label}
            <span
              style={{
                display: `${
                  themeCtx.theme === item.id &&
                  (router.asPath === "/" || router.asPath === "/detail")
                    ? ""
                    : "none"
                }`,
                background: `${themeData[themeCtx.theme].color}`,
              }}
            ></span>
          </a>
        </li>
      ))}
      <li>
        <Link
          href="/blog"
          style={{
            color: `${
              router.asPath === "/blog"
                ? `${themeData[themeCtx.theme].color}`
                : ""
            }`,
          }}
        >
          {t("blog")}
          <span
            style={{
              display: `${router.asPath === "/blog" ? "" : "none"}`,
              background: `${themeData[themeCtx.theme].color}`,
            }}
          ></span>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
