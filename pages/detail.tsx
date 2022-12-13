import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import coconutPackageImage from "../public/images/pikoland-coconut-package.png";
import cakeSm from "../public/images/cake-sm.png";
import cakeMd from "../public/images/cake-md.png";
import cakeLg from "../public/images/cake-lg.png";

export default function Detail() {
  return (
    <div>
      <Head>
        <title>Detail | Pikoland</title>
        <meta name="description" content="Ingredients" />
      </Head>

      <main>
        <section className="section">
          <div className="section__copy-right">copy-right</div>
          <div className="section__container">
            <ul className="section__nav">section nav</ul>
            <div className="section__body">section body</div>
            <div className="section__image section__image--ingredients bg-coconut">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 1, ease: "linear" }}
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
