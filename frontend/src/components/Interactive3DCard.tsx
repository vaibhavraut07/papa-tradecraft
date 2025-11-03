import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Interactive3DCardProps {
  children: ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: Interactive3DCardProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default Interactive3DCard;