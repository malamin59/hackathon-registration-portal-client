
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFoundActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      {/* Back to Home */}
      <Link
        to="/"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-purple-600/30 sm:w-auto"
      >
        <Home size={18} />

        Back to Home

        <ArrowUpRight
          size={17}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

      {/* Go Back */}
      <button
        onClick={() => window.history.back()}
        className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.08] hover:text-white sm:w-auto"
      >
        <ArrowLeft size={17} />
        Go Back
      </button>
    </motion.div>
  );
};

export default NotFoundActions;
