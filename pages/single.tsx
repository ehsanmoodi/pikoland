import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

import blogFeature1 from "../public/images/blog/feature1.png";
import Link from "next/link";
import { LanguageSwitcher } from "../components";

export default function Single() {
  return (
    <div>
      <Head>
        <title>Blog | Single</title>
        <meta name="description" content="Pikoland Blog" />
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="single"
              >
                <motion.h1
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="single__title"
                >
                  Not only the coolest but here’s the crispiest part of your day
                </motion.h1>
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "backOut" }}
                  className="single__body"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas erat imperdiet sed euismod nisi
                    porta lorem mollis. Morbi tristique senectus et netus.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    Sapien faucibus et molestie ac feugiat sed lectus
                    vestibulum. Ullamcorper velit sed ullamcorper morbi
                    tincidunt ornare massa eget. Dictum varius duis at
                    consectetur lorem. Nisi vitae suscipit tellus mauris a diam
                    maecenas sed enim. Velit ut tortor pretium viverra
                    suspendisse potenti nullam. Et molestie ac feugiat sed
                    lectus. Non nisi est sit amet facilisis magna. Dignissim
                    diam quis enim lobortis scelerisque fermentum.{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas erat imperdiet sed euismod nisi
                    porta lorem mollis. Morbi tristique senectus et netus.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    Sapien faucibus et molestie ac feugiat sed lectus
                    vestibulum. Ullamcorper velit sed ullamcorper morbi
                    tincidunt ornare massa eget. Dictum varius duis at
                    consectetur lorem. Nisi vitae suscipit tellus mauris a diam
                    maecenas sed enim. Velit ut tortor pretium viverra
                    suspendisse potenti nullam. Et molestie ac feugiat sed
                    lectus. Non nisi est sit amet facilisis magna. Dignissim
                    diam quis enim lobortis scelerisque fermentum.
                  </p>
                </motion.div>
              </motion.div>
            </div>
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
