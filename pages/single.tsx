import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import blogFeature1 from "../public/images/blog/feature1.png";

export default function Single() {
  return (
    <div>
      <Head>
        <title>Blog | Single</title>
        <meta name="description" content="Pikoland Blog" />
      </Head>

      <main>
        <section className="section">
          <div className="section__copy-right">copy-right</div>
          <div className="section__container">
            <ul className="section__nav">section nav</ul>
            <div className="section__body">section body</div>
            <div className="section__image section__image--single bg-coconut">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
              >
                <Image src={blogFeature1} alt="feature image" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
