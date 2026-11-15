
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2"
    >
      <Sparkles size={14} className="text-purple-400" />

      <span className="text-xs font-semibold tracking-[0.2em] text-purple-300">
        LOST IN SPACE?
      </span>
    </motion.div>
  );
};

export default NotFoundBadge;
