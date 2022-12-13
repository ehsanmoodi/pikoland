import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import coconutPackageImage from "../public/images/pikoland-coconut-package.png";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Pikoland</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section">
          <div className="section__copy-right">copy-right</div>
          <div className="section__container">
            <ul className="section__nav">section nav</ul>
            <div className="section__body">section body</div>
            <div className="section__image bg-lochmara">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 2, ease: "circIn" }}
                className="section__image__layer"
              ></motion.div>
              <Image src={coconutPackageImage} alt="Coconut Package Image" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
