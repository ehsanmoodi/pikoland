import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import { IngredientLink, LanguageSwitcher } from "../components";
import Link from "next/link";

// Images
import coconutPackage from "../public/images/coconut-package.png";
import coconutCurveText from "../public/images/coconut-curve-text.png";

export default function Home() {
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
        <section className="section">
          <div className="section__copy-right">
            <LanguageSwitcher />
            <span>© 2022 Pikoland. All Rights Reserved.</span>
          </div>
          <div className="section__container">
            <ul className="section__nav">
              <li>
                <a href="" className="carrot">
                  Carrot
                </a>
              </li>
              <li>
                <a href="">Hazelnut</a>
              </li>
              <li>
                <a href="">Raisin</a>
              </li>
              <li>
                <a href="">Coconut</a>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
            <div className="section__body">
              <div className="intro">
                <div className="intro__info">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 2, ease: "circIn" }}
                    className="intro__info__layer"
                  ></motion.div>
                  <Image src={coconutCurveText} alt="curve text" />
                  <h1 className="intro__info__title">PIKOLAND</h1>
                  <p className="intro__info__subtitle">
                    Mini Cakes With <strong>Carrot & Cinnamon</strong> Flavor
                  </p>
                </div>
                <IngredientLink />
              </div>
            </div>
            <div className="section__image bg-coconut">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 2, ease: "circIn" }}
                className="section__image__layer"
              ></motion.div>
              <Image src={coconutPackage} alt="Coconut Package Image" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
