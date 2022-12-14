import Image from "next/image";
import type { IngredientProps } from "./types";

const Ingredient: React.FC<IngredientProps> = ({ image, title }) => {
  return (
    <div className="ingredient">
      <Image src={image} alt="ingredient" />
      <h2 className="ingredient__title">{title}</h2>
    </div>
  );
};

export default Ingredient;
