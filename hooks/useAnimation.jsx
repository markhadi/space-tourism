import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const useAnimation = (elementId) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (isInView || trigger) {
      animate(
        elementId,
        {
          opacity: [0, 1],
        },
        {
          ease: "easeInOut",
          duration: 3,
        }
      );
      setTrigger(false);
    }
  }, [isInView, trigger, animate]);

  return [scope, () => setTrigger(true)];
};

export default useAnimation;
