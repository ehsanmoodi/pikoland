import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import coconutIngredient from "../../public/images/coconut-ingredient.png";

const IngredientLink: React.FC = () => {
  return (
    <div className="ingredient-link">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        transition={{ duration: 2, ease: "circIn" }}
        className="ingredient-link__layer"
      ></motion.div>
      <Image src={coconutIngredient} alt="ingredient link" />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75, delay: 2, ease: "backOut" }}
        className="ingredient-link__body"
      >
        <p className="ingredient-link__body__title">
          Pikoland is a Small Cake, Big joy for intimate gathering
        </p>
        <Link
          href="/detail"
          className="ingredient-link__body__href text-coconut"
        >
          Ingredients
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              className="stroke-coconut"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M14.43 5.93 20.5 12l-6.07 6.07"
            />
            <path
              className="stroke-coconut"
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
