
import { motion } from "framer-motion";
import { SearchX, Sparkles } from "lucide-react";

const floatingVariants = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const NotFoundIllustration = () => {
  return (
    <div className="relative mx-auto w-fit">

      {/* Left Floating Icon */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute -left-8 top-5 hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:block"
      >
        <SearchX className="text-purple-400" size={25} />
      </motion.div>

      {/* Right Floating Icon */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute -right-8 bottom-8 hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:block"
      >
        <Sparkles className="text-fuchsia-400" size={25} />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="select-none bg-gradient-to-b from-white via-purple-200 to-purple-600 bg-clip-text text-[clamp(8rem,25vw,17rem)] font-black leading-[0.85] tracking-[-0.09em] text-transparent drop-shadow-[0_0_45px_rgba(168,85,247,0.15)]"
      >
        404
      </motion.h1>

    </div>
  );
};

export default NotFoundIllustration;
