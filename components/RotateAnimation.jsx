import { motion } from "framer-motion";

const RotateAnimation = ({ children }) => {
  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 30,
    },
  };

  return <motion.div animate={rotateAnimation}>{children}</motion.div>;
};

export default RotateAnimation;
