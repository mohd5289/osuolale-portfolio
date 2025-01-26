import { motion } from "framer-motion";
import Image from "next/image";

const RotatingImage = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    >
      <Image src="/Earth.svg" alt="Rotating Earth" width={200} height={200} />
    </motion.div>
  );
};

export default RotatingImage;
