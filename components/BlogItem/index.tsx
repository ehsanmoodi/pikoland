import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogItemProps } from "./types.d";

const BlogItem: React.FC<BlogItemProps> = ({ image }) => {
  return (
    <article className="blog-item">
      <div className="blog-item__image">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ duration: 2, ease: "circIn" }}
          className="blog-item__image__layer"
        ></motion.div>
        <Image src={image} alt="blog 1" />
      </div>
      <div className="blog-item__body">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ duration: 2, ease: "circIn" }}
          className="blog-item__body__layer"
        ></motion.div>
        <p className="blog-item__body__excerpt">
          Not only the coolest but here’s the crispiest part of your day
        </p>
        <div className="blog-item__body__meta">
          <Link
            href="/single"
            className="blog-item__body__meta__link text-coconut"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                className="stroke-coconut"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M12.025 4.942 17.083 10l-5.058 5.059"
              />
              <path
                className="stroke-coconut"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M2.916 10h14.025"
                opacity=".4"
              />
            </svg>
          </Link>
          <span className="blog-item__body__meta__date">
            17 <strong> Oct </strong> 2022
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
