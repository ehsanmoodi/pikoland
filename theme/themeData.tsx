import { StaticImageData } from "next/image";

// Package
import carrotPackage from "../public/images/carrot-package.png";
import hazelnutPackage from "../public/images/hazelnut-package.png";
import raisinPackage from "../public/images/raisin-package.png";
import coconutPackage from "../public/images/coconut-package.png";

// Curve Text
import carrotCurveText from "../public/images/carrot-curve-text.png";
import hazelnutCurveText from "../public/images/hazelnut-curve-text.png";
import raisinCurveText from "../public/images/raisin-curve-text.png";
import coconutCurveText from "../public/images/coconut-curve-text.png";

// Ingredient Link
import carrotIngredient from "../public/images/carrot-ingredient.png";
import hazelnutIngredient from "../public/images/hazelnut-ingredient.png";
import raisinIngredient from "../public/images/raisin-ingredient.png";
import coconutIngredient from "../public/images/coconut-ingredient.png";

// Ingredients
import coconut from "../public/images/ingredients/coconut.png";
import cake from "../public/images/ingredients/cake.png";
import carrot from "../public/images/ingredients/carrot.png";
import choclateCake from "../public/images/ingredients/choclate-cake.png";
import hazelnut from "../public/images/ingredients/hazelnut.png";
import raisin from "../public/images/ingredients/raisin.png";

export const themeData: {
  [key: string]: {
    id: string;
    bg: string;
    bgImage: StaticImageData;
    color: string;
    curveText: StaticImageData;
    bgIngredient: StaticImageData;
    ingredients: {
      id: string;
      image: StaticImageData;
    }[];
  };
} = {
  carrot: {
    id: "carrot",
    bg: "radial-gradient(50% 50% at 50% 50%, #F8DDC7 0%, #ECA469 0.01%, #E68A3E 0.02%, #DF6704 100%)",
    bgImage: carrotPackage,
    color: "#DF6704",
    curveText: carrotCurveText,
    bgIngredient: carrotIngredient,
    ingredients: [
      {
        id: "carrot-cinnamon",
        image: carrot,
      },
      {
        id: "light-cake",
        image: cake,
      },
    ],
  },
  hazelnut: {
    id: "hazelnut",
    bg: "radial-gradient(50% 50% at 50% 50%, #F8DDC7 0%, #ECA469 0.01%, #C64555 0.02%, #AC1D2F 100%)",
    bgImage: hazelnutPackage,
    color: "#AC1D2F",
    curveText: hazelnutCurveText,
    bgIngredient: hazelnutIngredient,
    ingredients: [
      {
        id: "hazelnut",
        image: hazelnut,
      },
      {
        id: "chocolate-cake",
        image: choclateCake,
      },
    ],
  },
  raisin: {
    id: "raisin",
    bg: "radial-gradient(50% 50% at 50% 50%, #F8DDC7 0%, #ECA469 0.01%, #782CA3 0.02%, #531078 100%)",
    bgImage: raisinPackage,
    color: "#531078",
    curveText: raisinCurveText,
    bgIngredient: raisinIngredient,
    ingredients: [
      {
        id: "raisin",
        image: raisin,
      },
      {
        id: "light-cake",
        image: cake,
      },
    ],
  },
  coconut: {
    id: "coconut",
    bg: "radial-gradient(50% 50% at 50% 50%, #F8DDC7 0%, #ECA469 0.01%, #519BCF 0.02%, #0075C9 100%)",
    bgImage: coconutPackage,
    color: "#0075C9",
    curveText: coconutCurveText,
    bgIngredient: coconutIngredient,
    ingredients: [
      {
        id: "coconut",
        image: coconut,
      },
      {
        id: "light-cake",
        image: cake,
      },
    ],
  },
};
