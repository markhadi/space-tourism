import { useAnimate } from "framer-motion";

const useAnimation = () => {
  const [scope, animate] = useAnimate();

  const animateElement = (elementId) => {
    animate(
      elementId,
      {
        opacity: [0, 1],
        scale: [0.3, 1],
        filter: ["blur(20px)", "blur(0px)"],
      },
      {
        ease: [0.13, 0.55, 0.55, 1],
        duration: 0.5,
      }
    );
  };

  return [scope, animateElement];
};

export default useAnimation;
