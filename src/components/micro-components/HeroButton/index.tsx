import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const HeroButton = ({ onClick, children }: HeroButtonProps) => {
  const [startLoop, setStartLoop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartLoop(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={
        startLoop
          ? { opacity: [1, 0, 1], scale: [1, 1, 1] }
          : { opacity: 1, scale: 1 }
      }
      transition={
        startLoop
          ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {
              duration: 0.4,
              scale: {
                visualDuration: 0.4,
                bounce: 0.5,
                delay: 1.2,
                ease: "easeInOut",
              },
            }
      }
      onHoverStart={() => setStartLoop(false)}
      onHoverEnd={() => setStartLoop(true)}
      onClick={onClick}
      className="text-gray-700 blur-0 hover:text-orange-500 hover:blur-[1px] transition-all ease-in-out duration-300"
    >
      {children}
    </motion.button>
  );
};

export default HeroButton;
