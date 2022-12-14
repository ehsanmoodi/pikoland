import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogItem, LanguageSwitcher } from "../components";

import coconutPackage from "../public/images/coconut-package.png";
import blog1 from "../public/images/blog/1.png";
import blog2 from "../public/images/blog/2.png";
import blog3 from "../public/images/blog/3.png";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Pikoland</title>
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
              <div className="blog">
                <h1 className="blog__title">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 1, ease: "circIn" }}
                    className="blog__title__layer"
                  ></motion.div>
                  Blog
                </h1>
                <div className="blog__body">
                  <BlogItem image={blog1} />
                  <BlogItem image={blog2} />
                  <BlogItem image={blog3} />
                </div>
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
