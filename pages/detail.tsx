import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import coconutPackageImage from "../public/images/pikoland-coconut-package.png";
import cakeSm from "../public/images/cake-sm.png";
import cakeMd from "../public/images/cake-md.png";
import cakeLg from "../public/images/cake-lg.png";
import Link from "next/link";
import { LanguageSwitcher } from "../components";

export default function Detail() {
  return (
    <div>
      <Head>
        <title>Detail | Pikoland</title>
        <meta name="description" content="Ingredients" />
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
              <div className="ingredients">
                <h1 className="ingredients__title">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 1, ease: "circIn" }}
                    className="ingredients__title__layer"
                  ></motion.div>
                  Ingredients
                </h1>
              </div>
              
            </div>
            <div className="section__image section__image--ingredients bg-coconut">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 1, ease: "circIn" }}
                className="section__image__layer"
              ></motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.75, ease: "backOut" }}
                className="lg:self-start -ml-20 lg:ml-0 lg:-mb-14"
              >
                <Image src={cakeMd} alt="Cake Medium" quality={100} />
              </motion.div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "backOut", delay: 0.25 }}
                className="lg:self-end -mr-40 lg:mr-0 -my-8 lg:-my-10"
              >
                <Image src={cakeSm} alt="Cake Small" quality={100} />
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
                className="lg:-ml-0"
              >
                <Image src={cakeLg} alt="Cake Large" quality={100} />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
