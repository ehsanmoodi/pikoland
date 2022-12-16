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

// Intro Bgs
import carrotIntroBg from "../public/images/bgs/carrot-bg.png";
import hazelnutIntroBg from "../public/images/bgs/hazelnut-bg.png";
import raisinIntroBg from "../public/images/bgs/raisin-bg.png";
import coconutIntroBg from "../public/images/bgs/coconut-bg.png";

// Igredients Bgs
import carrotDetailBg from "../public/images/bgs/carrot-detail-bg.png";
import hazelnutDetailBg from "../public/images/bgs/hazelnut-detail-bg.png";
import raisinDetailBg from "../public/images/bgs/raisin-detail-bg.png";
import coconutDetailBg from "../public/images/bgs/coconut-detail-bg.png";

// Blog Bgs
import carrotBlogBg from "../public/images/bgs/carrot-blog-bg.png";
import hazelnutBlogBg from "../public/images/bgs/hazelnut-blog-bg.png";
import raisinBlogBg from "../public/images/bgs/raisin-blog-bg.png";
import coconutBlogBg from "../public/images/bgs/coconut-blog-bg.png";

// Single Bgs
import carrotSingleBg from "../public/images/bgs/carrot-single-bg.png";
import hazelnutSingleBg from "../public/images/bgs/hazelnut-single-bg.png";
import raisinSingleBg from "../public/images/bgs/raisin-single-bg.png";
import coconutSingleBg from "../public/images/bgs/coconut-single-bg.png";

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
    introBg: StaticImageData;
    detailBg: StaticImageData;
    blogBg: StaticImageData;
    singleBg: StaticImageData;
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
    introBg: carrotIntroBg,
    detailBg: carrotDetailBg,
    blogBg: carrotBlogBg,
    singleBg: carrotSingleBg,
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
    introBg: hazelnutIntroBg,
    detailBg: hazelnutDetailBg,
    blogBg: hazelnutBlogBg,
    singleBg: hazelnutSingleBg,
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
    introBg: raisinIntroBg,
    detailBg: raisinDetailBg,
    blogBg: raisinBlogBg,
    singleBg: raisinSingleBg,
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
    introBg: coconutIntroBg,
    detailBg: coconutDetailBg,
    blogBg: coconutBlogBg,
    singleBg: coconutSingleBg,
  },
};
