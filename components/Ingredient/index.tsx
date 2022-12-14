import Image from "next/image";
import { motion } from "framer-motion";
import type { IngredientProps } from "./types";

const Ingredient: React.FC<IngredientProps> = ({ image, title }) => {
  return (
    <div className="ingredient">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        transition={{ duration: 2, ease: "circIn" }}
        className="ingredient__layer"
      ></motion.div>
      <Image src={image} alt="ingredient" />
      <h2 className="ingredient__title">{title}</h2>
    </div>
  );
};

export default Ingredient;
