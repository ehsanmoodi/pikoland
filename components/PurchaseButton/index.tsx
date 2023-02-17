import { useRouter } from "next/router";
import { motion } from "framer-motion";

import digikalaIcon from "../../public/images/digikala.png";

import type { PurchaseButtonType } from "./types.d";
import Image from "next/image";

const PurchaseButton: React.FC<PurchaseButtonType> = ({ link, label }) => {
  const { locale } = useRouter();

  return link ? (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      href={link}
      target="_blank"
      className="purchase-btn"
    >
      <motion.i
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: 4,
          repeatType: "mirror",
        }}
      >
        <Image src={digikalaIcon} alt="digikala icon" />
      </motion.i>
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        {locale === "en" ? label.en : label.fa}
      </motion.span>
    </motion.a>
  ) : (
    <div />
  );
};

export default PurchaseButton;
