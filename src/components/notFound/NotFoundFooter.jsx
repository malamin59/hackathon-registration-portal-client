
import { motion } from "framer-motion";

const NotFoundFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="mx-auto mt-16 max-w-md border-t border-white/[0.08] pt-7"
    >
      <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
        CODE-A-NOVA
      </p>

      <p className="mt-2 text-xs text-gray-600">
        Innovate. Build. Compete.
      </p>
    </motion.footer>
  );
};

export default NotFoundFooter;
