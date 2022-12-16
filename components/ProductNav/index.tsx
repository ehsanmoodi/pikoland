import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../../theme/themContext";
import { themeData } from "../../theme/themeData";

const ProductNav: React.FC = () => {
  const themeCtx: { theme: string; toggleTheme: (theme: string) => void } =
    useContext(ThemeContext);

  const nextProduct = () => {
    const keys = Object.keys(themeData);
    const index = keys.indexOf(themeCtx.theme);

    if (index < keys.length - 1) {
      themeCtx.toggleTheme(themeData[keys[index + 1]].id);
    }
  };

  const prevProduct = () => {
    const keys = Object.keys(themeData);
    const index = keys.indexOf(themeCtx.theme);

    if (index > 0) {
      themeCtx.toggleTheme(themeData[keys[index - 1]].id);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={themeData[themeCtx.theme].id}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        className="product-nav"
      >
        <button
          onClick={prevProduct}
          className="prev"
          style={{
            backgroundColor: `${themeData[`${themeCtx.theme}`].color}`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M9.57 5.93 3.5 12l6.07 6.07"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M20.5 12H3.67"
              opacity=".4"
            />
          </svg>
        </button>
        <button onClick={nextProduct} className="next">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                stroke: `${themeData[`${themeCtx.theme}`].color}`,
              }}
              d="M14.43 5.93018L20.5 12.0002L14.43 18.0702"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              style={{
                stroke: `${themeData[`${themeCtx.theme}`].color}`,
              }}
              opacity="0.4"
              d="M3.50008 12L20.3301 12"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductNav;
